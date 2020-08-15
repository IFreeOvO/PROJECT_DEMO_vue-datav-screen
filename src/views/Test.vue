<template>
  <div style="width:100%;height:100%">
    <jiangsu-map-warning></jiangsu-map-warning>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref } from 'vue'
import JiangsuMapWarning from '@/components/JiangsuMapWarning/index'

export default {
  components: {
    JiangsuMapWarning
  },

  setup() {
    const options = ref({})

    return {
      options
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
