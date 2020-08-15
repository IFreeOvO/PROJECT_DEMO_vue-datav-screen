<template>
  <div class="sales-list">
    <base-scroll-list :config="config"></base-scroll-list>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'SalesList',

  props: {
    data: Array
  },

  setup(props) {
    const config = ref({})

    const update = () => {
      const headerData = ['姓名', '年龄', '月薪']
      const headerStyle = [{ color: 'red', width: '100px' }]
      const rowStyle = [{ color: 'blue' }]
      const rowBg = ['rgb(240,240,240)', 'rgb(255,255,255)']
      const data = []
      const aligns = ['center', 'left', 'right']
      const headerFontSize = 24
      const rowFontSize = 20
      const headerColor = '#fff'
      const rowColor = '#000'

      for (let i = 0; i < 10; i++) {
        data.push([`同学${i + 1}`, Math.floor(Math.random() * 10 + 20), Math.floor(Math.random() * 10000 + 10000)])
      }

      config.value = {
        headerData,
        headerStyle,
        headerBg: 'rgb(80,80,80)',
        headerHeight: 40,
        headerIndex: true,
        data,
        rowNum: 10,
        rowStyle,
        rowBg,
        aligns,
        headerFontSize,
        rowFontSize,
        headerColor,
        rowColor
      }
    }

    onMounted(() => {
      update()
    })

    const stop = watch(() => props.data, () => {
      update()
      stop()
    })

    return {
      config
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-list {
  height: 100%;
}
</style>
