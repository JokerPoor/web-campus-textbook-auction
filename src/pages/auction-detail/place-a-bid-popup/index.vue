<template>
  <div
    class="h-full place-a-bid-popup text-black px-6 flex flex-col justify-between"
  >
    <div>
      <div class="flex justify-betweens">
        <p class="flex-1 text-2xl font-1000">
          Premium Quality Organic Green Tea - Refreshing & Antioxidant-Rich,
          100% Natural, 50 Tea Bags, Perfect for Health and Wellness
        </p>
        <div class="w-7 bg-black text-center h-20 relative ml-2">
          <div class="text-white">大促</div>
          <div class="triangle"></div>
        </div>
      </div>
      <van-tag class="my-4" type="primary">#0123</van-tag>
      <div class="mt-4 mb-10">
        <van-rate
          :model-value="2"
          icon="like"
          void-icon="like-o"
          color="#121212"
        />
      </div>

      <div class="flex justify-between items-center">
        <div class="pb-10">
          <p>Current Bid</p>
          <p class="flex items-center">
            <i class="iconfont icon-price"></i>
            <span class="ml-2 font-extrabold">9999.999</span>
          </p>
        </div>
        <van-tag class="my-4" type="primary" round>
          <i class="iconfont icon-collection"></i>
          725
        </van-tag>
      </div>

      <p class="text-5xl tracking-wide font-800 text-center">01:36:08</p>
    </div>
    <div class="mb-10">
      <div class="flex justify-between my-6">
        <van-button round type="primary" disabled>
          <i class="iconfont icon-subtraction" @click="$router.back()"></i>
        </van-button>
        <p class="flex items-center">
          <i class="iconfont icon-price"></i>
          <span class="ml-2 text-3xl font-extrabold">9999.999</span>
        </p>
        <van-button round type="primary">
          <i class="iconfont icon-add" @click="$router.back()"></i>
        </van-button>
      </div>
      <van-button type="primary" block round size="small">Submit</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.triangle {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
  border-bottom: 12px solid white;
}
</style>