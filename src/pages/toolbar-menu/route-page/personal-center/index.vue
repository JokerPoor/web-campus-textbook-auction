<template>
  <div class="personal-center">
    <div class="flex justify-end m-6" @click="logoutHandle">
      <i class="iconfont icon-logout"></i>
    </div>

    <div class="flex ml-6">
      <van-image
        round
        width="4rem"
        height="4rem"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
        <template v-slot:error>加载失败</template>
      </van-image>

      <div class="flex-1 ml-2">
        <p class="font-extrabold text-2xl">Rintola</p>

        <p>The djkad adhfaa sd</p>

        <div>
          <i class="iconfont icon-email mr-2"></i>
          <span>E-mail: 12546154512@163.com</span>
        </div>
      </div>
    </div>

    <div class="flex my-2">
      <div class="w-1/3 text-center">
        <p>88</p>
        <span>我已购买</span>
      </div>
      <div class="w-1/3 text-center">
        <p>56</p>
        <span>我的上架</span>
      </div>
      <div class="w-1/3 text-center">
        <p>999</p>
        <span>我的收藏</span>
      </div>
    </div>

    <div class="text-black flex flex-wrap justify-between">
      <div
        class="bg-white manage-module-item rounded-3xl flex justify-center items-center"
      >
        <div class="flex flex-col items-center">
          <i class="iconfont icon-organizations manage-module-item_icon"></i>
          <p>User</p>
        </div>
      </div>

      <div
        class="bg-white manage-module-item rounded-3xl flex justify-center items-center"
      >
        <div class="flex flex-col items-center">
          <i class="iconfont icon-comment manage-module-item_icon"></i>
          <p>Comments</p>
        </div>
      </div>

      <div
        class="bg-white manage-module-item rounded-3xl flex justify-center items-center"
        @click="$router.push({ name: 'AuctionManage' })"
      >
        <div class="flex flex-col items-center">
          <i class="iconfont icon-auction-line manage-module-item_icon"></i>
          <p>Auction</p>
        </div>
      </div>
    </div>
  </div>

  <p class="ml-2 my-6 font-extrabold text-2xl">Temporary</p>

  <Carousel v-bind="config">
    <Slide v-for="slide in 10" :key="slide">
      <div class="rounded-2xl bg-white text-black mb-2">
        <van-image
          fit="contain"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="h-10">
          <van-tag type="primary">热卖</van-tag>
          <span class="font-extrabold text-2xl ml-6">00:52:00</span>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const config = {
  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};

const router = useRouter();

function logoutHandle() {
  router.replace({
    name: "LoginRegister",
  });
}
</script>

<style scoped lang="scss">
.manage-module-item {
  width: 44vw;
  aspect-ratio: 1 / 1;
  margin: 3vw;

  .manage-module-item_icon {
    font-size: 3rem;
  }
}
</style>