<template>
  <div class="main">
    <div class="left">
      <div class="Collapsed" @click="$store.commit('toggleCollapsed')">
        <menu-fold-outlined v-if="!$store.getters.collapsed"></menu-fold-outlined>
        <menu-unfold-outlined v-else/>
      </div>
      <div class="breadcrumb">
        <bread-crumb></bread-crumb>
      </div>
    </div>
    <div class="right">

      <div class="inform icon">
        <bell-outlined/>
      </div>
      <div class="dropdown">
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <span>{{ $store.getters.userInfo.userName }}</span>
            <DownOutlined/>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;"><span>{{ $store.getters.userInfo.userEmail }}</span></a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;" @click="logout">退出登录</a>
              </a-menu-item>

            </a-menu>
          </template>
        </a-dropdown>
      </div>

    </div>
  </div>
  <div class="tagView"></div>
</template>

<script setup>
import {
  BellOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'
import { message, Modal } from 'ant-design-vue'
import { createVNode } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import BreadCrumb from '@/components/breadcrumb'

const router = useRouter()
const store = useStore()
const logout = () => {
  Modal.confirm({
    title: '提示',
    icon: createVNode(ExclamationCircleOutlined),
    content: '您确定要退出登录吗？',
    okText: '确认',
    cancelText: '取消',
    onOk () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 500)
      }).then(() => {
        rest()
        store.commit('user/logout')
        message.success('退出成功！')
      })
    },

    onCancel () {
    }
  })
}

function rest () {
  if (!store.getters.hasuserInfo) {
    const menus = store.getters.actionList.filter(item => {
      return item.includes('query')
    })
    menus.forEach((menu) => {
      router.removeRoute(menu)
    })
  }
}
</script>
<style lang="scss" scoped>
.left {
  display: flex;
  align-items: center;

  & > div {
    margin-right: 10px;
  }

  .Collapsed {
    font-size: 16px;
  }
}

.right {
  display: flex;
  align-items: center;

  & > div {
    margin-right: 10px;
  }

  .dropdown {
    font-size: 16px;
  }
}

.main {
  display: flex;
  justify-content: space-between;
}

.icon {
  font-size: 20px;
  margin-right: 5px;
}
</style>
