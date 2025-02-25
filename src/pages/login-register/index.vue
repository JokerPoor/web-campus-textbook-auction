<template>
  <div class="login-register h-screen flex flex-col items-center justify-end">
    <van-button class="w-10/12 font-bold" @click="openLoginModal"
      >Log in</van-button
    >
    <div class="text-center text-white mt-6 mb-24">
      Don't have an account?
      <span class="font-bold" @click="openRegisterModal">Sign up</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useRegisterHook from "./hooks/useModal";

const { openRegisterModal, openLoginModal } = useRegisterHook();
</script>

<style scoped lang="scss">
.login-register {
  background: url("@/assets/img/login-bg.jpg") no-repeat;
  background-size: cover;
}
</style>./hooks/useModal