
<template>
  <div
    class="auction-detail px-4 pb-10 min-h-screen flex flex-col justify-between"
    :style="{
      'background-image':
        'url(https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg)',
    }"
  >
    <div class="flex justify-between px-2 pt-8">
      <van-button round type="primary">
        <i class="iconfont icon-back" @click="$router.back()"></i>
      </van-button>
      <van-button round type="primary">
        <i class="iconfont icon-collection"></i>
      </van-button>
    </div>
    <div>
      <p class="text-black font-800 text-3xl">Hachiman no Hogo</p>
      <p class="text-black text-xl">Tosei-gusoku Samurai Armour Cat Beautify</p>
      <van-tag class="my-2" type="primary">#0123</van-tag>
      <div class="my-4">
        <van-rate
          :model-value="2"
          icon="like"
          void-icon="like-o"
          color="#121212"
        />
      </div>
      <div class="text-6xl font-800 text-black">01:36:18</div>

      <div class="overflow-x-auto w-full flex space-x-4">
        <div class="flex-shrink-0" v-for="i in 10" :key="i">
          <van-image
            width="100"
            height="100"
            radius="20"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
      </div>

      <van-button
        type="primary"
        block
        round
        size="small"
        @click="placeABidHandle"
        >Place A Bid</van-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import usePopup from "@/hooks/usePopup";
import PlaceABidPopup from "./place-a-bid-popup/index.vue";

function placeABidHandle() {
  const popup = usePopup<{
    isShouldClose: () => void;
  }>({
    props: {
      isShouldClose: () => {
        popup.close();
      },
    },
    slots: {
      default: () =>
        h(PlaceABidPopup, {
          close: () => popup.close(),
        }),
    },
  });
}
</script>

<style scoped lang="scss">
.auction-detail {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>