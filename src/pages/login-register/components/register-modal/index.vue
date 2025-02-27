<template>
  <div class="register-modal flex flex-col items-center">
    <div class="font-bold text-4xl">注册一个账号</div>

    <register-page-avator-svg class="mt-2" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="formData.username"
        label="用户名"
        class="border-2 border-black rounded-lg mt-10"
        :rules="[
          { required: true, message: '请输入用户名' },
          { pattern: /^.{6,32}$/, message: '用户名长度需在6-32位之间' },
        ]"
      />

      <van-field
        v-model="formData.password"
        label="密码"
        :type="passwordType"
        class="border-2 border-black rounded-lg mt-4"
        :right-icon="passwordType === 'password' ? 'eye-o' : 'closed-eye'"
        @click-right-icon="passwordClickRightIcon"
        :rules="[
          { required: true, message: '请输入密码' },
          { pattern: /^.{6,18}$/, message: '密码长度需在6-18位之间' },
        ]"
      />

      <van-field
        v-model="formData.confirmPassword"
        label="确认密码"
        :type="passwordType"
        class="border-2 border-black rounded-lg mt-4"
        :right-icon="passwordType === 'password' ? 'eye-o' : 'closed-eye'"
        @click-right-icon="passwordClickRightIcon"
        :rules="[
          { required: true, message: '请输入确认密码' },
          {
            validator: confirmPasswordValidator,
            message: '两次密码不一致',
          },
        ]"
      />

      <van-field
        v-model="formData.email"
        label="邮箱"
        class="border-2 border-black rounded-lg mt-4"
        :rules="[
          { required: true, message: '请输入邮箱' },
          {
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: '请输入有效的邮箱地址',
          },
        ]"
      />

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>

    <div class="text-align text-black mt-6 mb-24">
      已有账号？
      <span class="font-bold" @click="goToLogin">前往登录</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { postUserInfoLogin, postUserInfoRegister } from "@/apis/userInfo";
import RegisterPageAvatorSvg from "@/assets/svg/register-page-avator.svg";
import { closeAxiosLoading, openAxiosLoading } from "@/hooks/useAxiosLoading";
import router from "@/router/index";
import useUserStore from "@/store";
import { FieldRuleValidator, FieldType } from "vant";
import useModalHook from "../../hooks/useModal";

const props = withDefaults(
  defineProps<{
    close: () => void;
  }>(),
  {}
);

const { openLoginModal } = useModalHook();

const formData = ref({
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
});

const passwordType = ref<FieldType>("password");

function passwordClickRightIcon() {
  passwordType.value = passwordType.value === "password" ? "text" : "password";
}

const confirmPasswordValidator: FieldRuleValidator = (value) => {
  if (value !== formData.value.password) {
    return "两次密码不一致";
  }
  return true;
};

function onSubmit() {
  openAxiosLoading();
  postUserInfoRegister({
    params: formData.value,
  }).then(() => {
    postUserInfoLogin({
      params: formData.value,
    }).then((res) => {
      useUserStore().setUser(res.data);
      closeAxiosLoading();
      router.replace({
        name: "Home",
      });
      props.close();
    });
  });
}

function goToLogin() {
  openLoginModal();
  props.close();
}
</script>

<style scoped lang="scss">
</style>
