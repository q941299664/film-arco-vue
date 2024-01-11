<template>
  <div>
    <a-row>
      <a-col>
        <a-row class="mill-seconds" justify="center">
          <a-col :span="2" align="center">
            <icon-schedule
              style="height: 100px; font-size: 60px; color: #9bccfa"
            />
          </a-col>
          <a-col :span="22">
            <a-row>
              <a-col style="padding-top: 13px">
                请在
                <a-countdown
                  :value="now + 1000 * 60 * 10"
                  :now="now"
                  value-style="color: red"
                  format="mm分ss秒"
                />
                内完成支付
              </a-col>
              <a-col>
                <span style="color: #72aee7"
                  >超时订单会自动取消，如遇支付问题，请致客服：1010-5335</span
                >
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
      <a-col>
        <br />
        <br />
        <span
          ><icon-exclamation-circle-fill
            style="color: #e7cc72"
          />请仔细核对场次信息,出票后将
          <span style="color: #e7cc72">无法退票和改签</span>
        </span>
      </a-col>
      <a-col>
        <a-table
          :columns="columns"
          :data="data"
          :pagination="false"
          align="center"
          row-key="id"
        >
          <template #hallTime="{ record }">
            <a-row justify="center" align="center">
              <a-col align="center">
                <b>{{ record.hallTime }}</b>
              </a-col>
              <a-col align="center">
                <span style="color: #8a8a8ae7"> 23:24散场 </span>
              </a-col>
            </a-row>
          </template>
          <template #ticketPrice="{ record }">
            <span style="color: red">￥{{ record.ticketPrice }}</span>
          </template>
          <template #remainingSeats="{ record }">
            <span>{{ record.remainingSeats }}位</span>
          </template>
        </a-table>
      </a-col>
      <a-col align="right">
        <br />
        <br />
        实际支付: <span style="font-size: 20px; color: red">￥</span
        ><span style="font-size: 30px; color: red">{{ 39 * 2 }}</span>
      </a-col>
      <a-col align="right">
        <br />
        <a-button type="primary" status="danger" @click="handleNext"
          >确认支付</a-button
        >
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

  const now = ref(new Date().getTime());
  const columns: TableColumnData[] = [
    {
      title: '影片',
      align: 'center',
      dataIndex: 'title',
    },
    {
      title: '放映时间',
      dataIndex: 'hallTime',
      slotName: 'hallTime',
      align: 'center',
      width: 200,
    },
    {
      title: '影院',
      align: 'center',
      dataIndex: 'hallName',
    },

    {
      title: '座位',
      align: 'center',
      dataIndex: 'remainingSeats',
      slotName: 'remainingSeats',
    },
  ];
  const data = reactive([
    {
      id: '1',
      hallName: cinema.value.name,
      hallTime: '21:45',
      title: movie.value.title,
      remainingSeats: '4号厅 6排4座 | 6排5座',
    },
  ]);
</script>

<script lang="ts">
  export default {
    name: 'Payment',
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
