<template>
  <div>
    <a-steps :current="currentStep">
      <a-step>选择影片场次</a-step>
      <a-step>选择座位</a-step>
      <a-step>10分钟内付款</a-step>
      <a-step>取票观影</a-step>
    </a-steps>
    <br />
    <a-card>
      <ShowTime
        v-if="currentStep === 1"
        :movie="movie"
        :cinema="cinema"
        @next-view="nextView"
      />
      <Seat
        v-if="currentStep === 2"
        :movie="movie"
        :cinema="cinema"
        @next-view="nextView"
      />
      <Payment
        v-if="currentStep === 3"
        :movie="movie"
        :cinema="cinema"
        @next-view="nextView"
      />
      <Result
        v-if="currentStep === 4"
        :movie="movie"
        :cinema="cinema"
        @next-view="nextView"
      />
    </a-card>

    <!-- <a-button @click="() => currentStep--">后退</a-button>
    <a-button @click="() => currentStep++">前进</a-button> -->
  </div>
</template>

<script lang="ts" setup>
  import { ref, defineProps, toRefs } from 'vue';
  import { MovieRecord } from '@/api/systemManger/movieManger/types';
  import { CinemaRecord } from '@/api/systemManger/cinemaManger/types';
  import ShowTime from './components/showTime/index.vue';
  import Seat from './components/seat/index.vue';
  import Payment from './components/payment/index.vue';
  import Result from './components/result/index.vue';

  const props = defineProps<{
    movie: MovieRecord;
    cinema: CinemaRecord;
  }>();
  const { movie, cinema } = toRefs(props);

  const currentStep = ref<number>(1);

  const nextView = () => {
    currentStep.value += 1;
  };
</script>

<script lang="ts">
  export default {
    name: 'Purchase',
  };
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: var(--color-text-2);
    text-align: center;
  }
</style>
