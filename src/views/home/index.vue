<template>
  <div class="container">
    <Breadcrumb :items="['menu.home', 'menu.home.movie']" />
    <a-card class="card" :title="$t(`menu.home.movie`)" :bordered="false">
      <a-layout class="layout">
        <a-layout-header>
          <a-row>
            <a-col>
              <a-input-search
                v-model="searchKeyword"
                :placeholder="$t(`home.movie.search.placeholder`)"
                @press-enter="search"
                @search="search"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col v-for="item in classificationList" :key="item.id">
              <template
                v-if="item.children?.length && item.children.length > 0"
              >
                <h3 class="classification">
                  {{ item.label }}
                </h3>
                <a-space wrap>
                  <a-button
                    :class="{ checked: item?.checked }"
                    type="text"
                    @click="handleAllClick(item)"
                    >{{ $t(`home.movie.seceltAll.btn`) }}</a-button
                  >
                  <a-button
                    v-for="btn in item.children"
                    :key="btn.id"
                    :class="{ checked: btn?.checked }"
                    type="text"
                    @click="handleClick(btn)"
                    >{{ btn.label }}</a-button
                  >
                </a-space>
              </template>
            </a-col>
          </a-row>
        </a-layout-header>
        <a-divider />
        <a-layout-content>
          <a-space wrap>
            <a-card
              v-for="item in movieList"
              :key="item.id"
              hoverable
              :style="{ width: '180px' }"
              :bordered="false"
              @click="handleCardClick(item)"
            >
              <template #cover>
                <div
                  :style="{
                    height: '240px',
                    overflow: 'hidden',
                  }"
                >
                  <img
                    :style="{
                      width: '100%',
                      height: '100%',
                    }"
                    :alt="item.title ?? ''"
                    :src="item.posterUrl ?? ''"
                  />
                </div>
              </template>
              <a-card-meta :title="item.title ?? ''">
                <template #description>
                  <p>{{ item.description }}</p>
                </template>
              </a-card-meta>
            </a-card>
          </a-space>
        </a-layout-content>
      </a-layout>
    </a-card>
    <a-modal
      v-model:visible="visible"
      width="60%"
      hide-cancel
      simple
      :footer="false"
      unmount-on-close
    >
      <Movie v-if="currentMovie" :movie="currentMovie" />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
  // import { useUserStore } from '@/store';
  import { Message } from '@arco-design/web-vue';
  import { ref, watch } from 'vue';
  // import { useI18n } from 'vue-i18n';
  import { listByCode } from '@/api/systemManger/dictDataManger';
  import { queryPage as movieQueryPage } from '@/api/systemManger/movieManger';
  import { DictDataTree } from '@/api/systemManger/dictDataManger/types';
  import { MovieRecord } from '@/api/systemManger/movieManger/types';
  import Movie from '@/components/movie/index.vue';

  // const { t } = useI18n();

  const classificationList = ref<DictDataTree[]>([]);

  const fetchClassificationListData = async () => {
    try {
      const { data } = await listByCode('movie_classification');
      data.forEach((item) => {
        item.checked = true;
      });
      classificationList.value = data;
    } catch (error) {
      Message.error((error as Error).message);
    }
  };

  fetchClassificationListData();

  const movieList = ref<MovieRecord[]>([]);
  const searchKeyword = ref<string>();
  const region = ref<string>();
  const genre = ref<string>();
  const current = ref<number>(1);
  const pageSize = ref<number>(20);
  const fetchData = async () => {
    try {
      const params = {
        current: current.value,
        pageSize: pageSize.value,
        title: searchKeyword.value,
        productionRegion: region.value,
        genre: genre.value,
      };
      console.log('传入参数：', params);

      const { data } = await movieQueryPage(params);
      movieList.value = data.records;
    } catch (error) {
      Message.error((error as Error).message);
    }
  };
  fetchData();
  const search = () => {
    fetchData();
  };
  const handleClick = (value: DictDataTree) => {
    const pid = value.parentId;
    // 找到当前节点的父组件
    const result: DictDataTree | undefined = classificationList.value.find(
      (item) => (item.id || pid) && item.id === pid
    );

    // 将这个父节点及子节点的checked修改为false
    unCheckedRecursion(result);

    // 设置当前节点熟悉
    if (result?.value === 'genre') {
      genre.value = value.id === -1 ? undefined : value.value;
    } else if (result?.value === 'region') {
      region.value = value.id === -1 ? undefined : value.value;
    }
    fetchData();
    // 将当前点击的子组件修改为真
    value.checked = true;
  };

  const handleAllClick = (value: DictDataTree) => {
    // 将这个父节点及子节点的checked修改为false
    unCheckedRecursion(value);
    if (value?.value === 'genre') {
      genre.value = undefined;
    } else if (value?.value === 'region') {
      region.value = undefined;
    }
    fetchData();
    // 将当前点击的子组件修改为真
    value.checked = true;
  };
  const currClassificationId = ref<{
    pid: number;
    ids: number[];
  }>({
    pid: 0,
    ids: [],
  });
  // 将当前数据及所有子节点的选中修改为false
  const unCheckedRecursion = (value?: DictDataTree) => {
    if (!value || value.id === -1) {
      return;
    }
    currClassificationId.value.pid = value.parentId as number;
    value.checked = false;
    const { children } = value;
    if (children) {
      children.forEach((c) => unCheckedRecursion(c));
    }
  };

  const visible = ref(false);
  const currentMovie = ref<MovieRecord>();
  const handleCardClick = (item: MovieRecord) => {
    currentMovie.value = item;
    visible.value = true;
  };
</script>

<script lang="ts">
  export default {
    name: 'Home',
  };
</script>

<style lang="less" scoped>
  .container {
    height: 100%;
    padding: 0 20px 20px;
  }

  .card {
    height: 100%;
    background-color: #fff;
  }

  .layout {
    width: 100%;
    height: 100%;
  }

  .checked {
    color: orangered;
  }

  .checked:hover {
    color: orangered;
  }
</style>
