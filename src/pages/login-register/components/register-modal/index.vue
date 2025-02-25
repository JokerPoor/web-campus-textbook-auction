<template>
  <div class="register-modal flex flex-col items-center">
    <div class="font-bold text-4xl">Create</div>
    <div class="font-bold text-4xl">an Account</div>

    <register-page-avator-svg class="mt-2" />

    <!-- <div class="w-10/12 border-2 border-black p-2 rounded-lg mt-10">
      <i class="iconfont icon-GitHub"></i
      ><span class="ml-2">Continue with Github</span>
    </div>

    <van-divider class="w-11/12">or</van-divider>

    <div class="w-10/12 border-2 border-black p-2 rounded-lg">
      <i class="iconfont icon-email"></i
      ><span class="ml-2">Sign Up with Email</span>
    </div> -->

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
      <van-field
        v-model="formData.email"
        label="email"
        class="border-2 border-black rounded-lg mt-4"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          Register
        </van-button>
      </div>
    </van-form>

    <div class="text-align text-black mt-6 mb-24">
      Already have an account?
      <span class="font-bold" @click="goToLogin">Go to login</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { postUserInfoLogin, postUserInfoRegister } from "@/apis/userInfo";
import RegisterPageAvatorSvg from "@/assets/svg/register-page-avator.svg";
import { closeAxiosLoading, openAxiosLoading } from "@/hooks/useAxiosLoading";
import router from "@/router/index";
import useUserStore from "@/store";
import { FieldType } from "vant";
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
  email: "",
});

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

const passwordType = ref<FieldType>("password");

function passwordClickRightIcon() {
  passwordType.value = passwordType.value === "password" ? "text" : "password";
}

function goToLogin() {
  openLoginModal();
  props.close();
}
</script>

<style scoped lang="scss">
</style>