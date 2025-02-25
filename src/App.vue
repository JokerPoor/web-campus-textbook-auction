<template>
  <layout-page>
    <van-config-provider
      :theme-vars="{ primaryColor: '#121212' }"
      theme-vars-scope="global"
    >
      <router-view v-slot="{ Component }">
        <transition :name="String($route.meta.transition ?? '')">
          <keep-alive :include="keepAliveRoutes">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>

      <van-overlay :show="show" z-index="10000" @click="closeAxiosLoading">
        <div class="wrapper" @click.stop>
          <img src="@/assets/img/page-loading.gif" class="w-screen" />
        </div>
      </van-overlay>
    </van-config-provider>
  </layout-page>
</template>

<script setup lang="ts">
import { keepAliveRoutes } from "@/router";
import { show, closeAxiosLoading } from "@/hooks/useAxiosLoading";
import LayoutPage from "@/components/layout-page/index.vue";
</script>


<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.slide-right-enter-active {
  transition: all 0.9s ease-out;
}

.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(60px);
  opacity: 0;
}

.app-router-view {
  min-height: 100vh;
}
</style>
