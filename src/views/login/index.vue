<template>
  <div class="login-box">
    <a-card>
      <h1>火星后台管理系统</h1>
      <a-form
        :label-col="{ span: 0 }"
        :model="formState"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
        name="basic"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          :rules="[{ required: true, message: '请输入用户名!' }]"
          name="userName"
        >
          <a-input v-model:value.trim="formState.userName">
            <template #prefix>
              <user-outlined type="user"/>
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          :rules="[{ required: true, message: '请输入密码!' }]"
          name="userPwd"
        >
          <a-input-password v-model:value.trim="formState.userPwd">
            <template #prefix>
              <lock-outlined/>
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
          <a-button :loading="loading" block html-type="submit" type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { login } from '@/api/user'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'

const loading = ref(false)
const router = useRouter()
const formState = reactive({
  userName: 'admin',
  userPwd: '123456'
})
const store = useStore()
const onFinish = async values => {
  try {
    loading.value = true
    const res = await login(formState)
    store.commit('user/setToken', res.token)
    store.commit('user/setUserInfo', res)
    if (res) {
      message.success('登录成功！')
      await router.push('/')
    }
  } catch (error) {

  }
  loading.value = false
}

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo)
}
</script>
<style lang="scss" scoped>
.login-box {
  width: 500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;

  h1 {
    text-align: center;
  }
}
</style>
