<template>
  <div>
    <a-row>
      <a-col :span="6">
        <a-divider>取票码</a-divider>
        <img
          :style="{
            width: '100%',
          }"
          src="@/assets/images/code.png"
        />
      </a-col>
      <a-col :span="8" style="padding-left: 20px">
        <a-row>
          <a-col>
            <h1 style="margin: 0">{{ movie.title }}</h1>
            <h3 style="margin-top: 0">{{ movie.originalTitle }}</h3>
          </a-col>

          <a-col style="padding: 15px 0">
            <b>类型：</b>{{ movie.genre }}
          </a-col>

          <a-col style="padding: 15px 0">
            <b>国家/地区：</b>{{ movie.productionRegion }}
          </a-col>

          <a-col style="padding: 15px 0">
            <b>主演：</b>{{ movie.castAndCrew }}
          </a-col>
          <a-col>
            支付价格:
            <span style="font-size: 20px; color: red">￥</span
            ><span style="font-size: 30px; color: red">{{ 39 * 2 }}</span>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="10" style="padding-left: 20px">
        <a-row>
          <a-col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <b>影院：</b>{{ cinema.name }}
          </a-col>

          <a-col style="padding: 15px 0"> <b>放映厅：</b>四号放映厅 </a-col>

          <a-col style="padding: 15px 0"> <b>座位：</b> 6排4座 | 6排5座 </a-col>

          <a-col style="padding: 15px 0">
            <b>放映时间：</b>今天 1月11日 21:45
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { ref, toRefs, defineProps, defineEmits, reactive } from 'vue';
  import { MovieRecord } from '@/api/systemManger/movieManger/types';
  import { CinemaRecord } from '@/api/systemManger/cinemaManger/types';
  import { TableColumnData } from '@arco-design/web-vue';

  const props = defineProps<{
    movie: MovieRecord;
    cinema: CinemaRecord;
  }>();
  const { movie, cinema } = toRefs(props);

  const emits = defineEmits<{
    (e: 'nextView'): void;
  }>();

  const handleNext = (record: any) => {
    emits('nextView');
  };
</script>

<script lang="ts">
  export default {
    name: 'Result',
  };
</script>

<style lang="less" scoped>
  .mill-seconds {
    height: 100px;
    background-color: #f3f8ff;
  }

  .time-text {
    font-size: 30px;
    color: #64a0d8;
  }
</style>
