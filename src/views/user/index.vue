<template>
  <a-card>
    <a-input v-model:value="searchModel.userId" placeholder="用户ID"/>
    <a-input v-model:value="searchModel.userName" placeholder="用户名称"/>
    <a-select
      v-model:value="searchModel.state"
      :options="options"
      style="width: 200px"
    ></a-select>
    <a-button type="primary" @click="loadTable">查询</a-button>
    <a-button @click="resetForm">重置</a-button>
    <a-button v-show="showBtn('user-create')" type="primary" @click="showModal">新增</a-button>
    <a-button v-show="showBtn('user-patch-delete')" danger type="primary">批量删除</a-button>
  </a-card>
  <a-spin :spinning="$store.getters.loadingStatus">
    <a-card style="margin-top: 10px">
      <a-table
        :columns="columns"
        :data-source="data"
        :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
        rowKey="userId"
        size="small"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'state'">
            <a-tag v-if="record.state===0">所有</a-tag>
            <a-tag v-if="record.state===1">在职</a-tag>
            <a-tag v-if="record.state===2">离职</a-tag>
            <a-tag v-if="record.state===3">试用期</a-tag>

          </template>
          <template v-if="column.key === 'role'">
            <a-tag v-if="record.role===0">超级管理员</a-tag>
            <a-tag v-if="record.role===1">普通员工</a-tag>

          </template>
          <template v-if="column.key === 'createTime'">
            {{ record.createTime.replace('.379Z', '') }}
          </template>
          <template v-if="column.key === 'lastLoginTime'">
            {{ record.lastLoginTime.replace('.379Z', '') }}
          </template>
          <template v-if="column.key==='operating'">
            <a-button v-show="showBtn('user-edit')" size="small">编辑</a-button>
            <a-button v-show="showBtn('user-delete')" danger size="small">删除</a-button>
          </template>
        </template>

      </a-table>
    </a-card>
  </a-spin>
  <a-modal v-model:visible="visible" title="提示" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getUserList } from '@/api/user'
import { getBtnPermission } from '@/utils/buttonPermissions'
import { useRoute } from 'vue-router'

const route = useRoute()
const result = getBtnPermission(route)
const showBtn = (btnName) => {
  return result.includes(btnName)
}
const visible = ref(false)
const showModal = () => {
  visible.value = true
}
const handleOk = e => {
  console.log(e)
  visible.value = false
}
const columns = [
  {
    title: '用户ID',
    dataIndex: 'userId',
    key: 'userId',
    width: 100,
    ellipsis: true
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName',
    width: 100,
    ellipsis: true
  },
  {
    title: '用户邮箱',
    dataIndex: 'userEmail',
    key: 'userEmail',
    width: 100,
    ellipsis: true
  },
  {
    title: '用户邮箱',
    dataIndex: 'userEmail',
    key: 'userEmail'
  },
  {
    title: '用户角色',
    dataIndex: 'role',
    key: 'role',
    width: 100,
    ellipsis: true
  },
  {
    title: '用户状态',
    dataIndex: 'state',
    key: 'state',
    width: 100,
    ellipsis: true
  },
  {
    title: '注册时间',
    dataIndex: 'createTime',
    key: 'createTime',
    width: 180,
    ellipsis: true
  },
  {
    title: '最后登录时间',
    dataIndex: 'lastLoginTime',
    key: 'lastLoginTime',
    width: 180,
    ellipsis: true
  },
  {
    title: '操作',
    key: 'operating'
  }
]
const data = ref([])
const searchModel = reactive({
  pageNum: 1,
  pageSize: 100,
  userId: '',
  userName: '',
  state: 0
})
const resetForm = () => {
  searchModel.userId = ''
  searchModel.userName = ''
  searchModel.state = 0
}
const options = ref([
  {
    value: 0,
    label: '所有'
  },
  {
    value: 1,
    label: '在职'
  },
  {
    value: 2,
    label: '离职'
  },
  {
    value: 3,
    label: '试用期'
  }

])
const state = reactive({
  selectedRowKeys: [], // Check here to configure the default column
  loading: false
})
const onSelectChange = (selectedRowKeys) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys)
  state.selectedRowKeys = selectedRowKeys
}
const loadTable = async () => {
  try {
    const res = await getUserList(searchModel)
    console.log(res)
    data.value = res.list
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
