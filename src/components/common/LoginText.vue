<template>
  <div>
   <van-cell-group>
  <van-field
    v-model="content"
    :label="label"
    :type="type"
    :rule="rule"
    :placeholder="placeholder"
  />
</van-cell-group>

  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  props: ['label', 'type', 'rule', 'placeholder'],
  methods: {
    handlerule () {
      // 将定义的字符串正则转换为真的真的正则
      const rule = new RegExp(this.rule)
      if (rule.test(this.content)) {
        // 发送一个事件，往父组件发送参数
        this.$emit('inputChange', this.content)
      }
    }
  },
  // 可以监视传递的内容
  watch: {
    content () {
      this.handlerule()
    }
  }
}
</script>
