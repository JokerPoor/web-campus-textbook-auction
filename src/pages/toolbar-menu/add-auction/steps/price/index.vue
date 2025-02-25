<template>
  <div class="price flex flex-col items-center px-4">
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
      <van-button plain round type="primary" size="small" @click="submitHandle">
        <span class="font-extrabold">Submit</span>
        <i class="iconfont ml-2 icon-submit"></i>
      </van-button>
    </div>

    <p class="text-3xl font-extrabold mb-4">Set Your Price</p>

    <p class="flex items-center">
      <i class="iconfont icon-price"></i>
      <span class="ml-2 text-3xl font-extrabold">9999.999</span>
    </p>

    <van-number-keyboard
      show
      title="SetReasonablePricesForMoreSuccessfulSales"
      extra-key="."
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script setup lang="ts">
function onInput() {
  console.log("onInput");
}

function onDelete() {
  console.log("onDelete");
}

function previousHandle() {}

function submitHandle() {}
</script>

<style scoped lang="scss">
</style>