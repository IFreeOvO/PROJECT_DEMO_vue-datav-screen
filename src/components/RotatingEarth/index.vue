<template>
  <div class="rotating-earch">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted } from 'vue'
import 'echarts-gl'

const ROOT_PATH = './'
export default {
  name: 'RotatingEarch',

  setup() {
    const options = ref({})

    const update = () => {
      options.value = {
        globe: {
          // 地球材质贴图
          baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          // 背景贴图
          environment: `${ROOT_PATH}assets/star-bg.jpg`
        }
      }
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
.rotating-earch {
  height: 100%;
}
</style>
