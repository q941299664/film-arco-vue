<template>
  <div class="login-form-wrapper">
    <div class="login-form-title">{{
      isLoginForm ? $t('login.form.loginTitle') : $t('login.form.registerTitle')
    }}</div>
    <div class="login-form-sub-title">{{
      isLoginForm
        ? $t('login.form.loginSubTitle')
        : $t('login.form.registerSubTitle')
    }}</div>
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form
      ref="loginForm"
      :model="userInfo"
      class="login-form"
      layout="vertical"
      @submit="handleAction"
    >
      <a-form-item
        v-if="!isLoginForm"
        field="username"
        required
        :rules="[{ required: true, message: $t('login.form.username.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.username"
          :placeholder="$t('login.form.username.placeholder')"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="email"
        required
        :rules="[
          { required: true, message: $t('login.form.email.errMsg') },
          {
            match: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
            message: $t('login.form.email.errMsg.match'),
          },
        ]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input
          v-model="userInfo.email"
          :placeholder="$t('login.form.email.placeholder')"
        >
          <template #prefix>
            <icon-email />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        field="password"
        required
        :rules="[{ required: true, message: $t('login.form.password.errMsg') }]"
        :validate-trigger="['change', 'blur']"
        hide-label
      >
        <a-input-password
          v-model="userInfo.password"
          :placeholder="$t('login.form.password.placeholder')"
          allow-clear
          autocomplete="off"
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
        v-if="!isLoginForm"
        field="confirmPassword"
        required
        :rules="[
          { required: true, message: $t('login.form.confirmPassword.errMsg') },
          { validator: checkPassword },
        ]"
        :validate-trigger="['change', 'blur']"
        hide-label
        autocomplete="off"
      >
        <a-input-password
          v-model="userInfo.confirmPassword"
          :placeholder="$t('login.form.confirmPassword.placeholder')"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox
            v-if="isLoginForm"
            checked="rememberPassword"
            :model-value="loginConfig.rememberPassword"
            @change="setRememberPassword"
          >
            {{ $t('login.form.rememberPassword') }}
          </a-checkbox>
          <a-link v-if="isLoginForm">{{
            $t('login.form.forgetPassword')
          }}</a-link>
        </div>
        <a-button type="primary" html-type="submit" long :loading="loading">
          {{ isLoginForm ? $t('login.form.login') : $t('login.form.register') }}
        </a-button>
        <a-button
          type="text"
          long
          class="login-form-register-btn"
          @click="switchForm"
        >
          {{
            isLoginForm
              ? $t('login.form.switchToRegister')
              : $t('login.form.switchToLogin')
          }}
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { Message } from '@arco-design/web-vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import { useI18n } from 'vue-i18n';
  import { useStorage } from '@vueuse/core';
  import { useUserStore } from '@/store';
  import useLoading from '@/hooks/loading';
  import type { LoginData, RegisterData } from '@/api/user/types';
  import { DEFAULT_ROUTE_NAME } from '@/router/constants';
  import { register } from '@/api/user';

  const router = useRouter();
  const { t } = useI18n();
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading();
  const userStore = useUserStore();

  const loginConfig = useStorage('login-config', {
    rememberPassword: true,
    email: '', // 演示默认值
    password: '', // demo default value
  });
  const userInfo = reactive({
    username: undefined,
    email: loginConfig.value.email,
    password: loginConfig.value.password,
    confirmPassword: undefined,
  });
  const isLoginForm = ref(true);

  const switchForm = () => {
    isLoginForm.value = !isLoginForm.value;
  };

  const checkPassword = async (
    value: string,
    callback: (errMsg: string) => void
  ) => {
    if (value && value !== userInfo.password) {
      callback(t('login.form.confirmPassword.errMsg.match'));
      return false;
    }
    return true;
  };
  const handleAction = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        if (isLoginForm.value) {
          await userStore.login(values as LoginData);
          router.push({ name: DEFAULT_ROUTE_NAME });
          Message.success(t('login.form.login.success'));
        } else {
          // 调用注册接口
          // Replace the following line with actual registration API call
          await register(values as RegisterData);
          Message.success(t('login.form.register.success'));
          // 注册成功后可以自动登录
          // Auto-login after successful registration
          await userStore.login(values as LoginData);
          router.push({ name: DEFAULT_ROUTE_NAME });
        }
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        await userStore.login(values as LoginData);
        const { redirect, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          name: (redirect as string) || DEFAULT_ROUTE_NAME,
          query: {
            ...othersQuery,
          },
        });
        Message.success(t('login.form.login.success'));
        const { rememberPassword } = loginConfig.value;
        const { email, password } = values;
        // 实际生产环境需要进行加密存储。
        // The actual production environment requires encrypted storage.
        loginConfig.value.email = rememberPassword ? email : '';
        loginConfig.value.password = rememberPassword ? password : '';
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        setLoading(false);
      }
    }
  };
  const setRememberPassword = (
    values: boolean | (string | number | boolean)[]
  ) => {
    loginConfig.value.rememberPassword = values as boolean;
  };
</script>

<style lang="less" scoped>
  .login-form {
    &-wrapper {
      width: 320px;
    }

    &-title {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      color: var(--color-text-1);
    }

    &-sub-title {
      font-size: 16px;
      line-height: 24px;
      color: var(--color-text-3);
    }

    &-error-msg {
      height: 32px;
      line-height: 32px;
      color: rgb(var(--red-6));
    }

    &-password-actions {
      display: flex;
      justify-content: space-between;
    }

    &-register-btn {
      color: var(--color-text-3) !important;
    }
  }
</style>
