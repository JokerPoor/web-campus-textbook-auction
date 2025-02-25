<template>
  <van-floating-panel v-model:height="currentHeight" :anchors="anchors">
    <slot></slot>
  </van-floating-panel>
</template>
  
  <script setup lang="ts">
import { useWindowSize } from "@vant/use";

const props = withDefaults(
  defineProps<{
    isShouldClose: () => void;
  }>(),
  {}
);

const { height } = useWindowSize();

const anchors = [
  0,
  Math.round(0.3 * height.value),
  Math.round(0.9 * height.value),
];

const currentHeight = ref(Math.round(0.9 * height.value));

watch(
  () => currentHeight.value,
  (newValue) => {
    if (newValue <= 100) {
      props.isShouldClose();
    }
  }
);
</script>
  
  <style scoped lang="scss">
</style>