<template>
  <div style="width:500px;height:400px;">
    <!-- <div>compunted: {{doubleCount}}</div>
    <div>ref: {{refNum}}</div>
    <div>vuex number: {{number}}</div>
    <div>vuex aa: {{a}}</div>
    <button @click="increment">{{state.count}}</button>
    <button @click="gotoAbout">gotoAbout</button>
    <button @click="updateNum">vuex commit</button>
    <button @click="updateA">vuex commit a</button> -->
    <base-scroll-list :config="config"></base-scroll-list>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref } from 'vue'
// import useTest from '@/views/useTest'

export default {
  setup() {
    // return useTest()
    const config = ref({})
    const headerData = ['姓名', '年龄', '月薪']
    const headerStyle = [{ color: 'red', width: '100px' }]

    config.value = {
      headerData,
      headerStyle,
      headerBg: 'rgb(80,80,80)',
      headerHeight: 40,
      headerIndex: true
    }

    return {
      config
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
