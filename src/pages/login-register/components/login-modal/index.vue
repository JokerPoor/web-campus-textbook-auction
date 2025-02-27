<template>
  <div class="login-modal flex flex-col items-center">
    <div class="font-bold text-4xl">欢迎回来!</div>

    <login-page-avator-svg class="mt-2" />

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
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

    <div class="text-align text-black mt-6 mb-24">
      没有账号？
      <span class="font-bold" @click="registerHandle">去注册</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useModalHook from "../../hooks/useModal";
import LoginPageAvatorSvg from "@/assets/svg/login-page-avator.svg";
import { closeAxiosLoading, openAxiosLoading } from "@/hooks/useAxiosLoading";
import { FieldType } from "vant";
import router from "@/router/index";
import useUserStore from "@/store";
import { postUserInfoLogin } from "@/apis/userInfo";

const props = withDefaults(
  defineProps<{
    close: () => void;
  }>(),
  {}
);

const { openRegisterModal } = useModalHook();

function registerHandle() {
  openRegisterModal();
  props.close();
}

const passwordType = ref<FieldType>("password");

function passwordClickRightIcon() {
  passwordType.value = passwordType.value === "password" ? "text" : "password";
}

const formData = ref({
  username: "",
  password: "",
});

function onSubmit() {
  openAxiosLoading();
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
}
</script>

<style scoped lang="scss"></style>