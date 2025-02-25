<template>
  <div class="login-modal flex flex-col items-center">
    <div class="font-bold text-4xl">Welcome back!</div>

    <login-page-avator-svg class="mt-2" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="formData.username"
        label="username"
        class="border-2 border-black rounded-lg mt-10"
      />
      <van-field
        v-model="formData.password"
        label="password"
        :type="passwordType"
        class="border-2 border-black rounded-lg mt-4"
        :right-icon="passwordType === 'password' ? 'eye-o' : 'closed-eye'"
        @click-right-icon="passwordClickRightIcon"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          Login
        </van-button>
      </div>
    </van-form>

    <div class="text-align text-black mt-6 mb-24">
      Don't have an account?
      <span class="font-bold" @click="registerHandle">Sign up</span>
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