<template>
  <div class="add-auction p-2 bg-white rounded-[50%]">
    <van-button round type="primary" @click="addAuctionHandle">
      <i class="iconfont icon-add"></i>
    </van-button>
  </div>
</template>

<script setup lang="ts">
import usePopup from "@/hooks/usePopup";
import BaseInfo from "./steps/base-info/index.vue";

function addAuctionHandle() {
  const popup = usePopup<{
    isShouldClose: () => void;
  }>({
    props: {
      isShouldClose: () => {
        popup.close();
      },
    },
    slots: {
      default: () => h(BaseInfo, {}),
    },
  });
}
</script>

<style scoped lang="scss">
</style>