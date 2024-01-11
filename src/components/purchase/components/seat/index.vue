<template>
  <a-row>
    <a-col :span="16" align="center">
      <a-row>
        <a-col>
          <a-space size="large" wrap>
            <div>
              <icon-printer />
              <span> 可选座位 </span>
            </div>
            <div>
              <icon-printer style="color: red" />
              <span> 已售座位 </span>
            </div>
            <div>
              <icon-printer style="color: green" />
              <span> 已选座位 </span>
            </div>
          </a-space>
        </a-col>
        <a-col>
          <div class="movieCard"></div>
        </a-col>
        <a-col>
          <h3>荧幕中央</h3>
        </a-col>
        <a-col>
          <a-row>
            <a-col :span="4">
              <a-grid :cols="1" :row-gap="10">
                <a-grid-item v-for="(_, index) in seatList" :key="index">{{
                  index + 1
                }}</a-grid-item>
              </a-grid>
            </a-col>
            <a-col :span="16">
              <a-grid :cols="9" align="center" :row-gap="10">
                <template v-for="(row, rIndex) in seatList" :key="rIndex">
                  <a-grid-item
                    v-for="(col, cIndex) in row"
                    :key="cIndex"
                    align="center"
                    style="user-select: none"
                  >
                    <icon-printer
                      :style="{
                        color:
                          col === 2 ? 'green' : col === 1 ? 'red' : undefined,
                        fontSize: '20px',
                      }"
                      @click="handleSeat(rIndex, cIndex)"
                    />
                  </a-grid-item>
                </template>
              </a-grid>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="8" style="background-color: var(--color-neutral-2)">
      <a-row>
        <a-col :span="6" style="padding-top: 10px; padding-left: 10px">
          <img
            :style="{
              width: '100%',
            }"
            :alt="movie.title ?? ''"
            :src="movie.posterUrl ?? ''"
          />
        </a-col>
        <a-col :span="18">
          <div style="padding-left: 20px">
            <a-row>
              <a-col>
                <h2 style="margin: 0; margin-top: 5px; margin-bottom: 10px">{{
                  movie.title
                }}</h2>
              </a-col>
              <a-col>
                <span class="neutral">类型：</span>
                {{ movie.genre }}
              </a-col>
              <a-col>
                <span class="neutral">时长：</span>
                {{ movie.duration }} 分钟
              </a-col>
            </a-row>
          </div>
        </a-col>
        <a-col style="padding-left: 10px">
          <span class="neutral">影院：</span>
          {{ cinema.name }}
        </a-col>
        <a-col style="padding-left: 10px">
          <span class="neutral">影厅：</span>
          四号厅
        </a-col>
        <a-col style="padding-left: 10px">
          <span class="neutral">场次：</span>
          今天 21:45
        </a-col>
        <a-col style="padding-left: 10px">
          <span class="neutral">票价：</span>
          <span style="color: red">￥39</span>
        </a-col>
        <a-divider />
        <a-col style="padding-left: 10px">
          <span class="neutral">座位: </span>
          <a-space>
            <a-tag
              v-for="item in seatTagList"
              :key="item.id"
              color="green"
              bordered
              >{{ `${item.r + 1}排${item.c + 1}座` }}</a-tag
            >
            <span v-if="seatTagList.length === 0" class="neutral"
              >一次最多选6个座位</span
            >
          </a-space>
        </a-col>

        <a-col style="padding-left: 10px">
          <br />
          <span>总价: </span>
          <span style="font-size: 28px; color: red"
            >￥{{ seatTagList.length * 39 }}</span
          >
        </a-col>
        <a-divider />
        <a-col align="center">
          <span class="neutral">手机号:</span>
          <span>151****9478</span>
        </a-col>
        <a-col align="center" style="padding-bottom: 30px">
          <br />
          <a-button type="primary" @click="handleNext">确认选座</a-button>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
  import { ref, toRefs, defineProps, defineEmits } from 'vue';
  import { MovieRecord } from '@/api/systemManger/movieManger/types';
  import { CinemaRecord } from '@/api/systemManger/cinemaManger/types';

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

  const matrix: Array<Array<number>> = new Array<Array<number>>(6);
  for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = new Array<number>(9);
  }
  matrix[2][4] = 1;
  matrix[2][5] = 1;
  matrix[0][3] = 1;
  matrix[0][4] = 1;
  const seatList = ref(matrix);
  const seatTagList = ref<
    {
      id: string;
      r: number;
      c: number;
    }[]
  >([]);
  const handleSeat = (r: number, c: number) => {
    const item = seatList.value[r][c];
    if (item === 1) {
      return;
    }
    if (item === 2) {
      seatList.value[r][c] = 0;
      seatTagList.value = seatTagList.value.filter(
        (item) => item.id !== `${r}${c}`
      );
      return;
    }
    seatList.value[r][c] = 2;
    seatTagList.value.push({
      id: `${r}${c}`,
      r,
      c,
    });
  };
</script>

<script lang="ts">
  export default {
    name: 'Seat',
  };
</script>

<style lang="less" scoped>
  .head {
    margin-bottom: 10px;
  }

  .movieCard {
    width: 60%;
    height: 10px;
    box-shadow: 0 -1px 3px rgb(255 0 0), 0 -2px 3px yellow, 0 -3px 3px orange;
  }

  .neutral {
    color: var(--color-neutral-6);
  }
</style>
