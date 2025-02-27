<template>
  <div class="home">
    <div class="flex justify-between px-6 py-6">
      <span class="text-3xl font-800">拍卖广场</span>
      <i class="iconfont icon-search"></i>
    </div>

    <van-radio-group
      v-model="categoryCheck"
      direction="horizontal"
      max="1"
      icon-size="60"
      class="px-6"
      @change="categoryCheckChange"
    >
      <van-radio
        v-for="item in categoryList"
        :key="item.categoryId"
        :name="item.categoryId"
      >
        <template #icon="{ checked }">
          <van-button :plain="checked" round type="primary">
            {{ item.categoryName }}
          </van-button>
        </template>
      </van-radio>
    </van-radio-group>

    <Carousel v-bind="config" class="py-20">
      <Slide v-for="textbook in textbookList" :key="textbook.textbookId">
        <div
          class="relative bg-white w-full h-80 rounded-3xl shadow-md auction__item"
          :style="{
            'background-image': `url(${textbook.coverImgPath})`,
          }"
        >
          <div class="absolute w-full bottom-0 left-0 bg-white rounded-3xl p-4">
            <div class="flex justify-between">
              <span class="text-2xl font-400 text-black">{{
                textbook.title
              }}</span>
              <span class="text-3xl font-400 text-black">{{
                E_Textbook_Info_Status[textbook.status]
              }}</span>
              <van-tag type="primary">#{{ textbook.textbookId }}</van-tag>
            </div>
            <div class="text-1xl font-800 text-black">
              <span
                >{{ textbook.auctionStartTime }} ~
                {{ textbook.auctionEndTime }}</span
              >
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
    <van-button
      type="primary"
      round
      block
      icon="replay"
      @click="() => categoryCheck && categoryCheckChange(categoryCheck)"
      >换一批</van-button
    >
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import {
  I_Category_Select_List,
  I_Textbook_Info,
  postTextbookCategorySelectList,
  postTextbookInfoRandom,
  E_Textbook_Info_Status,
} from "@/apis/textbookCategory";
import { closeAxiosLoading, openAxiosLoading } from "@/hooks/useAxiosLoading";

const config = {
  itemsToShow: 1.5,
  wrapAround: true,
  transition: 500,
  gap: 26,
};

const textbookList = ref<I_Textbook_Info[]>([]);

const categoryList = ref<I_Category_Select_List[]>([]);

const categoryCheck = ref<I_Category_Select_List["categoryId"]>();

async function categoryCheckChange(name: I_Category_Select_List["categoryId"]) {
  openAxiosLoading();
  await postTextbookInfoRandom({
    params: {
      categoryId: name,
      size: 10,
      status: "0,1",
    },
  }).then((res) => {
    textbookList.value = res.data;
  });
  closeAxiosLoading();
}

onMounted(async () => {
  openAxiosLoading();
  await postTextbookCategorySelectList().then((res) => {
    categoryList.value = res.data;
    categoryCheck.value = categoryList.value[0].categoryId;
  });
  closeAxiosLoading();
});
</script>

<style scoped lang="scss">
@use "./index.scss" as *;
</style>