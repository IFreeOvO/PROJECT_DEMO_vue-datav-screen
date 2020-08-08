<template>
  <div>
    <!-- <div>compunted: {{doubleCount}}</div>
    <div>ref: {{refNum}}</div>
    <div>vuex number: {{number}}</div>
    <div>vuex aa: {{a}}</div>
    <button @click="increment">{{state.count}}</button>
    <button @click="gotoAbout">gotoAbout</button>
    <button @click="updateNum">vuex commit</button>
    <button @click="updateA">vuex commit a</button> -->
    <base-scroll-list
      :header="header"
      :headerStyle="headerStyle"
      :headerHeight='40'
    ></base-scroll-list>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref } from 'vue'
// import useTest from '@/views/useTest'

export default {
  setup() {
    // return useTest()
    const header = ref([])
    const headerStyle = ref([])

    header.value = ['姓名', '年龄', '月薪']
    headerStyle.value = [{ color: 'red' }]

    return {
      header,
      headerStyle
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
