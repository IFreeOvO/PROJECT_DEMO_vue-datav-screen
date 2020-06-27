import { ref, reactive, computed, watch, onMounted, getCurrentInstance } from 'vue'

export default function useTest() {
  const state = reactive({
    count: 1
  })

  const { ctx } = getCurrentInstance() // 获取组件实例

  const refNum = ref(1)

  const doubleCount = computed(() => state.count * 2)

  const increment = () => {
    state.count++
  }

  const gotoAbout = () => {
    ctx.$router.push('/about')
  }

  watch(() => state.count, () => {
    console.log('变化')
  })

  onMounted(() => {
    console.log('生命周期', refNum, ctx.$router, ctx)
  })

  return {
    state,
    doubleCount,
    increment,
    gotoAbout,
    refNum
  }
}
