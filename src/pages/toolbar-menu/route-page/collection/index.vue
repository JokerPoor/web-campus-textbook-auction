<template>
  <div class="collection px-2">
    <div class="flex justify-between px-6 py-6">
      <span class="text-3xl font-800">Collection</span>
      <i class="iconfont icon-search"></i>
    </div>

    <div class="flex flex-wrap gap-4">
      <div class="bg-white rounded-2xl size-default"></div>
      <div
        class="bg-white text-black rounded-2xl size-default p-2 flex flex-col justify-between"
      >
        <p class="text-4xl font-800">01:36:08</p>
        <p>Morning Standup With Team Design Team meet link google docs ...</p>
        <p class="text-end">2024/11/25</p>
      </div>
      <div
        class="bg-white text-black rounded-2xl size-row p-2 flex flex-col justify-between"
      >
        <p class="text-4xl font-800">01:36:08</p>
        <p>Morning Standup With Team Design Team meet link google docs ...</p>
        <p class="text-end">2024/11/25</p>
      </div>
      <div
        class="bg-white text-black rounded-2xl size-col p-2 flex flex-col justify-between"
      >
        <p class="text-4xl font-800">01:36:08</p>
        <p>Morning Standup With Team Design Team meet link google docs ...</p>
        <p class="text-end">2024/11/25</p>
      </div>
      <div class="bg-white rounded-2xl size-default"></div>
      <div class="bg-white rounded-2xl size-default"></div>
      <div class="bg-white rounded-2xl size-col"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.collection {
  .size-default {
    width: calc((100% - 1rem) / 2);
    height: 10rem;
  }

  .size-col {
    width: calc((100% - 1rem) / 2);
    height: 12rem;
  }

  .size-row {
    width: 100%;
    height: 6rem;
  }
}
</style>