<template>
  <a-card>
    <a-input v-model:value="searchModel.roleName" placeholder="角色名称"/>
    <a-button type="primary" @click="loadTable()">查询</a-button>
    <a-button @click="resetForm">重置</a-button>
    <a-button v-show="showBtn('role-create')" type="primary">创建</a-button>
  </a-card>
  <a-spin :spinning="$store.getters.loadingStatus">
    <a-card style="margin-top: 10px">
      <a-table
        :columns="columns"
        :data-source="data"
        rowKey="_id"
        size="small"
      >
        <template #bodyCell="{ column }">
          <template v-if="column.key==='operating'">
            <a-button v-show="showBtn('role-edit')" size="small">编辑</a-button>
            <a-button v-show="showBtn('role-setting')" size="small" type="primary">权限设置</a-button>
            <a-button v-show="showBtn('role-delete')" danger size="small">删除</a-button>
          </template>
        </template>

      </a-table>
    </a-card>
  </a-spin>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getRoleList } from '@/api/user'
import { useRoute } from 'vue-router'
import { getBtnPermission } from '@/utils/buttonPermissions'

const route = useRoute()
const result = getBtnPermission(route)
const showBtn = (btnName) => {
  return result.includes(btnName)
}
const columns = [
  {
    title: '角色名称',
    dataIndex: 'roleName',
    key: 'roleName'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark'
  },
  {
    title: '权限列表',
    dataIndex: '',
    key: ''
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime'
  },
  {
    title: '操作',
    key: 'operating'
  }
]
const searchModel = reactive({
  pageNum: 1,
  pageSize: 100,
  roleName: ''
})
const data = ref()
const loadTable = async () => {
  try {
    const res = await getRoleList(searchModel)
    data.value = res.list
  } catch (error) {

  }
}
loadTable()
const resetForm = () => {
  searchModel.roleName = ''
}
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
