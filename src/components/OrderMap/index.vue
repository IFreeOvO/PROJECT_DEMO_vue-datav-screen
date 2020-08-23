<template>
  <div class="order-map">
    <div
      class="loading"
      v-if="loading"
    >加载中...</div>
    <vue-echarts
      :options="options"
      v-else
    ></vue-echarts>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted } from 'vue'
import echarts from 'echarts'
import 'echarts-gl'

export default {
  name: 'OrderMap',

  setup() {
    const options = ref({})
    const loading = ref(true)

    const update = () => {
      fetch('http://www.youbaobao.xyz/datav-res/datav/map.json').then(response => response.json()).then(data => {
        echarts.registerMap('china', data)
        const cities = ['北京', '上海', '深圳', '广州', '杭州', '南京']
        options.value = {
          timeline: {
            data: cities,
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
            left: '10%',
            right: '5%',
            bottom: '3%',
            width: '80%',
            label: {
              normal: {
                textStyle: {
                  color: '#ddd'
                }
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            symbolSize: 10,
            lineStyle: {
              color: '#555'
            },
            // 当前项样式
            checkpointStyle: {
              borderColor: '#777',
              borderWidth: 2
            },
            controlStyle: {
              showNextBtm: true,
              showPrevBtn: true,
              normal: {
                color: '#666',
                borderColor: '#666'
              },
              emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
              }
            }
          },
          baseOption: {
            geo: {
              map: 'china',
              zoom: 1.1,
              roam: true,
              scaleLimit: {
                min: 0.5,
                max: 3
              },
              center: [113.83531246, 34.0267395887],
              itemStyle: {
                normal: {
                  borderColor: 'rgb(147,235,248)',
                  borderWidth: 1,
                  areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(147,235,248,0)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(147,235,248,0.2)'
                      }
                    ],
                    global: false
                  },
                  shadowColor: 'rgba(128,217,248,1)',
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10
                },
                emphasis: {
                  areaColor: '#389BB7',
                  borderWidth: 0
                }
              }
            }
          }
        }
        loading.value = false
      })
    }

    onMounted(() => {
      update()
    })

    return {
      options,
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.order-map {
  height: 100%;
  background: rgb(48, 48, 48);
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 36px;
    background: rgb(48, 48, 48);
    color: #fff;
  }
}
</style>
