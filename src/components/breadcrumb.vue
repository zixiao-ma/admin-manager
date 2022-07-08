<template>
  <a-breadcrumb>
    <a-breadcrumb-item @click="$router.push('/')">首页</a-breadcrumb-item>
    <a-breadcrumb-item v-for="item in route.matched" v-show="item.meta.title" :key="item.path">{{
        item.meta.title
      }}
    </a-breadcrumb-item>

  </a-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>
<style lang="scss" scoped>

</style>
