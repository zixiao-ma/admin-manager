<template>
  <div>
    <div class="header">
      <img alt="" src="http://manager.9yuecloud.com/img/logo.384b81fb.png">
      <span v-show="!$store.getters.collapsed">{{ $store.getters.userInfo.userName }}</span>
    </div>
    <a-menu

      mode="inline"
      theme="dark"
    >
      <menu-item v-for="(item,index) in list" :key="index" :tree="item">

      </menu-item>

    </a-menu>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getMenus, getParentMenu } from '@/utils/menus'
import MenuItem from '@/layout/components/menuItem'
import { reactive } from 'vue'

const router = useRouter()
const list = reactive(getMenus(getParentMenu(router.getRoutes())))

</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 10px;

  img {
    height: 30px;
  }

  span {
    color: #fff;
    font-size: 20px;
    position: relative;
    top: 3px;
    width: 100%;
    left: 5px;
  }

  text-align: center;
}
</style>
