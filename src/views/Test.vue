<template>
  <div style="width:100%;height:100%">
    <rotating-earth></rotating-earth>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted } from 'vue'
import RotatingEarth from '@/components/RotatingEarth/index'

export default {
  components: {
    RotatingEarth
  },

  setup() {
    const options = ref({})

    const update = () => {

    }

    onMounted(() => {
      update()
    })

    return {
      options
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
