<template>
  <div class="base-info flex flex-col items-center px-4">
    <div class="flex w-full justify-end items-center pr-4">
      <van-button plain round type="primary" size="small" @click="nextHandle">
        <span class="font-extrabold">Continue</span>
        <i class="iconfont ml-2 icon-next-step"></i>
      </van-button>
    </div>

    <p class="text-3xl font-extrabold mb-4">Base Info</p>

    <van-uploader>
      <div class="relative">
        <div class="w-28 h-28 border-2 border-black rounded-[50%]"></div>
        <i
          class="iconfont icon-camera absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4"
        ></i>
      </div>
    </van-uploader>

    <div class="w-full mt-10 relative">
      <div class="absolute custom-label">Title</div>
      <van-field class="border-2 border-black rounded-3xl" />
    </div>

    <div class="w-full mt-12 relative">
      <div class="absolute custom-label">StartTime</div>
      <van-field class="border-2 border-black rounded-3xl" />
    </div>

    <i class="iconfont icon-time-steps"></i>

    <div class="w-full relative">
      <div class="absolute custom-label">EndTime</div>
      <van-field class="border-2 border-black rounded-3xl mb-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import usePopup from "@/hooks/usePopup";
import Description from "../description/index.vue";

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
      default: () => h(Description, {}),
    },
  });
}
</script>

<style scoped lang="scss">
.base-info {
  .icon-camera {
    font-size: 36px;
  }

  .custom-label {
    left: 20px;
    top: 0;
    z-index: 1;
    transform: translateY(-50%);
    padding: 0 10px;
    font-size: 18px;
    font-weight: 400;
    background-color: #ffffff;
  }
}
</style>