<template>
  <div>

    <nav-bar></nav-bar>
    <van-tabs v-model="active" scrollspy sticky>
      <!-- 从后端请求的数据 用v-for循环打印出来 -->
      <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
    <div @click="$router.push('/register')">az </div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar'
export default {
  data () {
    return {
      category: [],
      active: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    async selectCategory () {
      // 请求后端的数据
      const res = await this.$http.get('/category')
      // 请求到的data数据传给定义的category数组内
      this.category = res.data
    }

  },
  created () {
    this.selectCategory()
  }
}
</script>

<style>

</style>
