<template>
  <div>
    <!--  父传子字符串不用: -->
    <login-top middleTop="注册bilibili">
      <div slot="right" @click="$router.push('/login')" style="font-size:1.333vw">点击登入</div>
    </login-top>
    <login-text
      style="margin: 5vw 0vw"
      label="姓名 "
      rule="^.{6,10}$"
      placeholder="请输入姓名"
      @inputChange="res => model.name=res"
    />
    <login-text
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
    <login-button btnname="注册" @registerSubmit="registerSubmit" />
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
        name: '',
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
      // 判断输入的格式
      if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)) {
        // axios的内容,要去重新理解一下
        const res = await this.$http.post('/register', this.model)
        // 调用 组件
        this.$msg.fail(res.data.msg)
        console.log(res)
        // 存储数据 setItem:存储
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.objtoken)
        setTimeout(() => {
          // 成功了就跳转到登入页面
          this.$router.push('/login')
        }, 1000)
      } else {
        this.$msg.fail('输入正确的格式，懂？')
      }
    }
  }
}
</script>
