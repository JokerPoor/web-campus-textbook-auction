<template>
  <div class="collection">
    <div class="flex justify-between items-center pt-2 pb-4 px-4">
      <i class="iconfont icon-back" @click="() => $router.go(-1)"></i>
      <span>Auction Manage</span>
      <van-button round size="mini">
        <i class="iconfont icon-search"></i>
      </van-button>
    </div>
    <van-swipe-cell class="mb-2" v-for="item in auctionsList" :key="item.auctionId">
      <div class="bg-white text-black rounded-2xl">
        <div class="flex justify-between px-4 mb-3 pt-1">
          <span class="font-extrabold text-2xl"> {{ item.title }} </span>
          <div>
            <van-tag round plain type="primary">{{ item.status }}</van-tag>
            <van-tag class="ml-2" round plain type="primary">{{ item.paymentStatus }}</van-tag>
          </div>
        </div>
        <div class="px-2 flex items-center justify-between">
          <div>
            <i class="iconfont icon-calendar"></i>
            <span>{{ item.startTime }} ~ {{ item.endTime }}</span>
          </div>
          <i class="iconfont icon-eye" @click="auctionClickHandle"></i>
        </div>
      </div>
      <template #right>
        <div class="h-full px-2 flex items-center">
          <van-button round @click="bannedAuction(item)" :disabled="item.status === 'BANNED'">封禁</van-button>
          <van-button round @click="deleteAuction(item)">删除</van-button>
        </div>
      </template>
    </van-swipe-cell>
    <van-button :loading="getDataLoading" block @click="!isNoData && getAuctionsList()">{{ isNoData ? '没有更多数据了' : '加载更多' }}</van-button>
  </div>
</template>

<script setup lang="ts">
import { postAdminAuctionControllerAdminAuction, I_AdminAuctionVO, postAdminAuctionControllerBanAuction } from "@/apis/adminAuctionOpr";
import { useRouter } from "vue-router";
import { showConfirmDialog } from 'vant';
import { closeAxiosLoading, openAxiosLoading } from "@/hooks/useAxiosLoading";

const router = useRouter();

const pageQuery = ref({
  pageIndex: 0,
  pageSize: 10
})

const isNoData = ref(false)

const auctionsList = ref<I_AdminAuctionVO[]>([]);

const getDataLoading = ref(false)

// 加载拍卖品数据
function getAuctionsList() {
  pageQuery.value.pageIndex++
  getDataLoading.value = true
  postAdminAuctionControllerAdminAuction({
    data: pageQuery.value
  }).then(result => {
    auctionsList.value = auctionsList.value.concat(result.data.list)
    if (result.data.total === auctionsList.value.length) {
      isNoData.value = true;
    }
    getDataLoading.value = false
  })
}

// 封禁
function bannedAuction(item: I_AdminAuctionVO) {
  openAxiosLoading()
  postAdminAuctionControllerBanAuction({
  }, item.auctionId).then(() => {
    auctionsList.value = auctionsList.value.map(auction => {
      if (auction.auctionId === item.auctionId) {
        auction.status = 'BANNED'
      }
      return auction
    })
  })
    .finally(() => {
      closeAxiosLoading()
    })
}

// 删除
function deleteAuction(item: I_AdminAuctionVO) {
  showConfirmDialog({
    title: '警告',
    message:
      '删除之后将丢失数据，是否确认删除？',
  })
    .then(() => {
      // loading + request
      console.log(item);
    })
}

// 点击查看详情
function auctionClickHandle() {
  router.push({
    name: "AuctionDetail",
  });
}

function initData() {
  getAuctionsList()
}

initData()
</script>

<style scoped lang="scss"></style>