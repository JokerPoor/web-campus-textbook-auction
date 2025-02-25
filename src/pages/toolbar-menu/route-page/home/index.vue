<template>
  <div class="home">
    <div class="flex justify-between px-6 py-6">
      <span class="text-3xl font-800">Classification</span>
      <i class="iconfont icon-search"></i>
    </div>

    <van-radio-group
      v-model="checked"
      direction="horizontal"
      max="1"
      icon-size="60"
      class="px-6"
    >
      <van-radio name="Hot">
        <template #icon="props">
          <van-button :plain="props.checked" round type="primary">
            Hot
          </van-button>
        </template>
      </van-radio>
      <van-radio name="New">
        <template #icon="props">
          <van-button :plain="props.checked" round type="primary">
            New
          </van-button>
        </template>
      </van-radio>
      <van-radio name="Leak">
        <template #icon="props">
          <van-button :plain="props.checked" round type="primary">
            Leak
          </van-button>
        </template>
      </van-radio>
    </van-radio-group>

    <Carousel v-bind="config" class="py-20">
      <Slide v-for="slide in 10" :key="slide">
        <div
          class="relative bg-white w-full h-80 rounded-3xl shadow-md auction__item"
          :style="{
            'background-image':
              'url(https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg)',
          }"
        >
          <div class="absolute w-full bottom-0 left-0 bg-white rounded-3xl p-4">
            <div class="flex justify-between">
              <span class="text-2xl font-400 text-black">Komo no...</span>
              <van-tag type="primary">#0123</van-tag>
            </div>
            <div class="text-4xl font-800 text-black">
              <span>01:36:18</span>
              <i
                class="iconfont icon-eye text-black pl-2"
                @click="
                  () =>
                    $router.push({
                      name: 'AuctionDetail',
                    })
                "
              ></i>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const config = {
  itemsToShow: 1.5,
  wrapAround: true,
  transition: 500,
  gap: 26,
};
const checked = ref("Hot");
</script>

<style scoped lang="scss">
.home {
  .auction__item {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .carousel__slide {
    padding: 5;
  }

  .carousel__viewport {
    perspective: 2000px;
  }

  .carousel__track {
    transform-style: preserve-3d;
  }

  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }

  .carousel__slide.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
  }
}
</style>