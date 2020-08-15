<template>
  <div style="width:100%;height:100%">
    <vue-echarts :options="options"></vue-echarts>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
import { ref, onMounted } from 'vue'

export default {
  name: 'JiangsuMapWarning',

  setup() {
    const options = ref({})

    const update = () => {
      fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
        .then(res => res.json())
        .then(data => {
          const center = []
          data.features.forEach(item => {
            if (item.properties) {
              center.push({
                [item.properties.name]: item.properties.center
              })
            }
          })

          echarts.registerMap('jiangsu', data)
          console.log('update -> echarts', center)
          options.value = {
            visualMap: {
              show: true, // 左下角标识展示
              max: 100,
              seriesIndex: [0],
              // 色值范围
              inRange: {
                color: ['#a5dcf4', '#006edd']
              }
            },
            geo: [{
              map: 'jiangsu',
              zoom: 1,
              roam: false, // 启用鼠标滚动缩放
              scaleLimit: {
                min: 0,
                max: 3
              },
              itemStyle: {
                areaColor: '#013c62',
                shadowColor: '#013c62',
                shadowBlur: 20,
                shadowOffsetX: -5,
                shadowOffsetY: 15
              }
            }],
            series: [{
              type: 'map',
              mapType: 'jiangsu', // 将数据和地图关联
              zoom: 1,
              roam: true,
              label: {
                show: true,
                color: '#fff',
                emphasis: {
                  color: '#fff',
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#2989b9',
                  borderWidth: 1,
                  areaColor: '#12235c'
                },
                emphasis: {
                  areaColor: '#fa8c16',
                  borderWidth: 0
                }
              },
              data: center.map(centerItem => {
                const key = Object.keys(centerItem)[0]
                return {
                  name: key,
                  value: Math.random() * 100
                }
              })
            }]
          }
        })
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
