<template>
<div class="loginf" @click="registerClick">
  <div class="loginbutton">{{btnname}}</div>
</div>

</template>

<script>
export default {
  props: ['btnname'],
  methods: {
    registerClick () {
      this.$emit('registerSubmit')
    }
  }
}
</script>
<style>
.loginf{
  padding: 2vw  2vw;
}
.loginbutton{
  height: 10vw;
  background-color: pink;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 1.333vw;
  border-radius: 6.667vw;

}
</style>
