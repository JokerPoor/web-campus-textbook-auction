<template>
  <div class="flex flex-col items-center px-4">
    <div class="flex w-full justify-between items-center px-4">
      <van-button
        plain
        round
        type="primary"
        size="small"
        @click="previousHandle"
      >
        <span class="font-extrabold">Previous</span>
        <i class="iconfont ml-2 icon-previous_step"></i>
      </van-button>
      <van-button plain round type="primary" size="small" @click="nextHandle">
        <span class="font-extrabold">Continue</span>
        <i class="iconfont ml-2 icon-next-step"></i>
      </van-button>
    </div>

    <p class="text-3xl font-extrabold mb-4">Fill in the description</p>

    <MdEditor v-model="text" :preview="false" />
  </div>
</template>

<script setup lang="ts">
import usePopup from "@/hooks/usePopup";
import Price from "../price/index.vue";
import "md-editor-v3/lib/style.css";
import { MdEditor } from "md-editor-v3";

const text = ref("");

function previousHandle() {}

function nextHandle() {
  const popup = usePopup<{
    isShouldClose: () => void;
  }>({
    props: {
      isShouldClose: () => {
        popup.close();
      },
    },
    slots: {
      default: () => h(Price, {}),
    },
  });
}
</script>

<style scoped lang="scss">
</style>