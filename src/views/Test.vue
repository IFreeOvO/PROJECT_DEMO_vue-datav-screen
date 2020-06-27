<template>
  <div>
    <div>compunted: {{doubleCount}}</div>
    <div>ref: {{refNum}}</div>
    <button @click="increment">{{state.count}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
import useTest from '@/views/useTest'

export default {
  setup() {
    // const state = reactive({
    //   count: 1
    // })

    // const increment = () => {
    //   state.count++
    // }

    const { state, increment, doubleCount, refNum } = useTest()

    return {
      state,
      increment,
      doubleCount,
      refNum
    }
  }
}
</script>
