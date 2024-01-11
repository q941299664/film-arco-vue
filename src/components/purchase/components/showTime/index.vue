<template>
  <div>
    <div class="head">
      <span>观影时间 : </span>
      <a-space>
        <a-tag color="#165dff">今天</a-tag>
        <span>明天</span>
        <span>后天</span>
      </a-space>
    </div>
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
      <template #operations="{ record }">
        <div>
          <a-button type="primary" @click="handleNext(record)"
            >选座购票</a-button
          >
        </div>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, defineEmits } from 'vue';
  import { TableColumnData } from '@arco-design/web-vue';

  const emits = defineEmits<{
    (e: 'nextView'): void;
  }>();

  const columns: TableColumnData[] = [
    {
      title: '放映时间',
      dataIndex: 'hallTime',
      slotName: 'hallTime',
      align: 'center',
      width: 200,
    },
    {
      title: '放映厅',
      align: 'center',
      dataIndex: 'hallName',
    },
    {
      title: '售价',
      align: 'center',
      dataIndex: 'ticketPrice',
      slotName: 'ticketPrice',
    },
    {
      title: '剩余座位数',
      align: 'center',
      dataIndex: 'remainingSeats',
      slotName: 'remainingSeats',
    },
    {
      title: '选座购票',
      align: 'center',
      slotName: 'operations',
    },
  ];
  const data = reactive([
    {
      id: '1',
      hallName: '4号厅',
      hallTime: '21:45',
      ticketPrice: 39,
      remainingSeats: 40,
    },
  ]);

  const handleNext = (record: any) => {
    emits('nextView');
  };
</script>

<script lang="ts">
  export default {
    name: 'ShowTime',
  };
</script>

<style lang="less" scoped>
  .head {
    margin-bottom: 10px;
  }
</style>
