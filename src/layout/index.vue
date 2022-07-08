<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="$store.getters.collapsed">
      <app-menus></app-menus>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <app-header></app-header>
      </a-layout-header>
      <a-layout-content>
        <app-main></app-main>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>

import AppMenus from '@/layout/components/AppMenus'
import AppHeader from '@/layout/components/AppHeader'
import AppMain from '@/layout/components/AppMain'</script>
<style lang="scss" scoped>
.ant-layout {
  height: 100%;
}

.ant-layout-header {
  background-color: #fff;
}

.ant-layout-header {
  padding: 0 10px !important;
  height: 50px;
  line-height: 50px;
}

.ant-layout-content {
  padding: 10px;
  overflow-y: auto;
}
</style>
