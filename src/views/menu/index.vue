<template>
  <a-card>
    <a-input v-model:value="searchModel.menuName" placeholder="菜单名称"/>
    <a-select
      v-model:value="searchModel.menuState"
      :options="options"
      style="width: 200px"
    ></a-select>
    <a-button type="primary" @click="loadTable">查询</a-button>
    <a-button @click="resetForm">重置</a-button>
    <a-button v-show="showBtn('menu-create')" type="primary">新增</a-button>
  </a-card>
  <a-spin :spinning="$store.getters.loadingStatus">
    <a-card style="margin-top: 10px">
      <a-table
        :columns="columns"
        :data-source="data"

        rowKey="_id"
        size="small"
      >
        <template #bodyCell="{ column,record }">
          <template v-if="column.key === 'menuType'">
            <a-tag v-if="record.menuType===1">菜单</a-tag>
            <a-tag v-if="record.menuType===2">按钮</a-tag>

          </template>
          <template v-if="column.key === 'menuState'">
            <a-tag v-if="record.menuState===0">停用</a-tag>
            <a-tag v-if="record.menuState===1">正常</a-tag>

          </template>
          <template v-if="column.key==='operating'">
            <a-button v-show="showBtn('menu-edit')" size="small">编辑</a-button>
            <a-button v-show="showBtn('menu-delete')" danger size="small">删除</a-button>
          </template>
        </template>

      </a-table>
    </a-card>
  </a-spin>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getMenus } from '@/api/user'
import { useRoute } from 'vue-router'
import { getBtnPermission } from '@/utils/buttonPermissions'

const route = useRoute()
const result = getBtnPermission(route)
const showBtn = (btnName) => {
  return result.includes(btnName)
}
const columns = [
  {
    title: '菜单名称',
    dataIndex: 'menuName',
    key: 'menuName',
    width: 180,
    ellipsis: true
  },
  {
    title: '图标',
    dataIndex: 'icon',
    key: 'icon',
    width: 180,
    ellipsis: true
  },
  {
    title: '菜单类型',
    dataIndex: 'menuType',
    key: 'menuType',
    width: 100,
    ellipsis: true

  },
  {
    title: '权限标识',
    dataIndex: '',
    key: '',
    width: 100,
    ellipsis: true
  },
  {
    title: '路由地址',
    dataIndex: 'path',
    key: 'path',
    width: 100,
    ellipsis: true
  },
  {
    title: '组件路径',
    dataIndex: 'component',
    key: 'component',
    width: 100,
    ellipsis: true
  },
  {
    title: '菜单状态',
    dataIndex: 'menuState',
    key: 'menuState',
    width: 80,
    ellipsis: true
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 100,
    ellipsis: true
  },
  {
    title: '操作',
    key: 'operating'
  }
]
const data = ref([])
const searchModel = reactive({

  menuName: '',
  menuState: 1
})
const resetForm = () => {
  searchModel.menuState = 1
  searchModel.menuName = ''
}
const options = ref([
  {
    value: 0,
    label: '停用'
  },
  {
    value: 1,
    label: '正常'
  }

])

const loadTable = async () => {
  try {
    const res = await getMenus(searchModel)
    data.value = res
  } catch (error) {

  }
}
loadTable()
</script>
<style lang="scss" scoped>

.ant-input {
  width: 200px;
  margin-right: 10px;
}

.ant-select {
  margin-right: 10px;
}

.ant-btn {
  margin-right: 10px;
}

</style>
