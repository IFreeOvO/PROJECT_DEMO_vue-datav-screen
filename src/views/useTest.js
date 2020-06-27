import { ref, reactive, computed, watch, onMounted } from 'vue'

export default function useTest() {
  const state = reactive({
    count: 1
  })

  const refNum = ref(1)

  const doubleCount = computed(() => state.count * 2)

  const increment = () => {
    state.count++
  }

  watch(() => state.count, () => {
    console.log('变化')
  })

  onMounted(() => {
    console.log('生命周期', refNum)
  })

  return {
    state,
    doubleCount,
    increment,
    refNum
  }
}
