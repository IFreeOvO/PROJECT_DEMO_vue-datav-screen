import { ref, onMounted, onUnmounted } from 'vue'

export default function() {
  const todayUser = ref(10000)
  const growthLastDay = ref(10.25)
  const growthLastMonth = ref(15.15)

  let task

  onMounted(() => {
    task = setInterval(() => {
      todayUser.value += 10
      growthLastDay.value += 1
      growthLastMonth.value += 1
    }, 3000)
  })

  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    todayUser,
    growthLastDay,
    growthLastMonth
  }
}
