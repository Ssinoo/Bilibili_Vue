<template>
  <div>
    <!--  父传子字符串不用: -->
    <login-top middleTop="登入bilibili"></login-top>

    <login-text
      style="padding-top:20px"
      label="账号"
      rule="^.{6,10}$"
      placeholder="请输入账号"
      @inputChange="res => model.username=res"
    />
    <login-text
      label="密码"
      rule="^.{6,10}$"
      placeholder="请输入密码"
      type="password"
      @inputChange="res => model.password=res"
    />
    <login-button btnname="登入" @registerSubmit="registerSubmit" />
  </div>

</template>

<script>
// 直接从component中调用公用组件
import LoginTop from '../components/common/LoginTop'
import LoginText from '../components/common/LoginText'
import LoginButton from '../components/common/LoginButton'
export default {
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginButton
  },
  methods: {
    // 处理异步请求
    async registerSubmit () {
      const rulg = /^.{6,10}$/
      if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post('/login', this.model)
        this.$msg.fail(res.data.msg)
        console.log(res)
        if (res.data.code === 200) {
          localStorage.setItem('id', res.data.id)
          localStorage.setItem('token', res.data.objtoken)
          setTimeout(() => {
            this.$router.push('/userinfo')
          }, 1000)
        }
      } else {
        this.$msg.fail('输入正确的账号密码，懂？')
      }
    }
  }
}
</script>
