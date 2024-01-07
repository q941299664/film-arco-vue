<script setup lang="ts">
  import { useUserStore } from '@/store';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  const userStore = useUserStore();
</script>

<template>
  <div class="content">
    <div class="title">
      <h1>{{ $t('home.index.title') }}</h1>
    </div>
    <div class="intro">
      <p
        >{{ $t('home.index.intro') }}
        <strong>{{ userStore.username }}</strong>
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .content {
    width: 100%;
    height: 100%;

    .title {
      color: #337eff;
      text-align: center;
    }

    .intro {
      color: #6ba0fa;
      text-align: center;
      text-indent: 2em;
    }
  }
</style>
