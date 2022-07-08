<template>
  <a-card>
    <a-input v-model:value="searchModel.deptName" placeholder="部门名称"/>
    <a-button type="primary" @click="loadTable()">查询</a-button>
    <a-button @click="resetForm">重置</a-button>
    <a-button v-show="showBtn('dept-create')" type="primary">创建</a-button>
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
            <a-button v-show="showBtn('dept-edit')" size="small">编辑</a-button>
            <a-button v-show="showBtn('dept-delete')" danger size="small">删除</a-button>
          </template>
        </template>

      </a-table>
    </a-card>
  </a-spin>

</template>

<script setup>
import { reactive, ref } from 'vue'
import { getDeptList } from '@/api/user'
import { useRoute } from 'vue-router'
import { getBtnPermission } from '@/utils/buttonPermissions'

const route = useRoute()
const result = getBtnPermission(route)
const showBtn = (btnName) => {
  return result.includes(btnName)
}
const searchModel = reactive({
  deptName: ''
})
const columns = [
  {
    title: '部门名称',
    dataIndex: 'deptName',
    key: 'deptName'
  },
  {
    title: '邮箱',
    dataIndex: 'userEmail',
    key: 'userEmail'
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
const data = ref()
const loadTable = async () => {
  try {
    const res = await getDeptList(searchModel)
    data.value = res
  } catch (error) {

  }
}
loadTable()

const resetForm = () => {
  searchModel.deptName = ''
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
