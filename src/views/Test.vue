<template>
  <div style="width:500px;height:400px;">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const options = ref({})

    const update = () => {
      options.value = {
        baseOption: {
          timeline: {
            axisType: 'category',
            controlStyle: {
              position: 'left'
            },
            autoPlay: true,
            playInterval: 1000,
            loop: true, // 是否循环
            inverse: false, // 是否反向放置timeline
            rewind: false, // 是否反向播放
            currentIndex: 2, // 从第几个位置开始播放
            data: [
              {
                value: '2002-01-01',
                symbol: 'diamond',
                symbolSize: 20
              },
              '2003-01-01',
              '2004-01-01',
              '2005-01-01',
              '2006-01-01',
              '2007-01-01',
              '2008-01-01',
              '2009-01-01',
              '2010-01-01',
              {
                value: '2011-01-01',
                symbol: 'triangle',
                symbolSize: 20
              }
            ],
            label: {
              formatter(v) {
                return new Date(v).getFullYear()
              }
            }
          }
        },
        options: []
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
</style>
