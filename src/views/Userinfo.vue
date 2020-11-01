<template>
  <div>
    <nav-bar></nav-bar>
    <img src="../assets/infoTop.jpg" class="infotop">
    <user-detail :userInfo="model" />
  </div>

</template>

<script>
import NavBar from '../components/common/NavBar'
import userDetail from '../components/userComponent/userDetail'
export default {
  data () {
    return {
      model: {}
    }
  },
  components: {
    NavBar,
    userDetail
  },
  methods: {
    async UserinfoData () {
      // 请求了后端api
      const res = await this.$http.get('/user/' + localStorage.getItem('id'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }

      })
      console.log(res)
      this.model = res.data[0]
    }
  },
  created () {
    this.UserinfoData()
  }

}
</script>
<style>
.infotop{
  padding: 0px 0px;
  height: 110px;
  width: 100%;
}
</style>
