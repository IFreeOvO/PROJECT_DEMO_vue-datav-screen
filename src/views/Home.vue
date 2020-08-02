<template>
  <div class="home">
    <imooc-loading v-if="loading">
      <div class="loading-text">数据大屏加载中...</div>
    </imooc-loading>
    <imooc-container
      :options="{width:3840,height:2160}"
      v-else
    >
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growth-last-day="growthLastDay"
              :growth-last-month="growthLastMonth"
            ></total-user>
          </div>
          <div class="left2">
            <average-age :data="ageData" :avg-age="averageAge" />
          </div>
          <div class="left3">555</div>
          <div class="left4">666</div>
          <div class="left5">777</div>
          <div class="left6">888</div>
        </div>
        <div class="right">
          <div class="right-top1">999</div>
          <div class="right-top2">000</div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">111</div>
              <div class="right-left2">222</div>
              <div class="right-left3">333</div>
              <div class="right-left4">444</div>
            </div>
            <div class="right-right">
              <div class="right-right1">555</div>
              <div class="right-right2">666</div>
            </div>
          </div>
        </div>
      </div>
    </imooc-container>
  </div>
</template>

<script type="text/ecmascript-6">
import { ref, onMounted } from 'vue'
import TopHeader from '@/components/TopHeader/index'
import TotalUser from '@/components/TotalUser/index'
import AverageAge from '@/components/AverageAge/index'
import useScreenData from '@/hooks/useScreenData.js'

export default {
  name: 'Home',

  components: {
    TopHeader,
    TotalUser,
    AverageAge
  },

  setup() {
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    })

    const screenData = useScreenData()

    return {
      loading,
      ...screenData
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #imooc-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .header {
    height: 167px;
    // background: yellow;
    width: 100%;
  }
  .separator {
    height: 10px;
    background: rgb(92, 88, 89);
    width: 100%;
  }
  .center {
    flex: 1;
    background: rebeccapurple;
    width: 100%;
    display: flex;
    .left {
      flex: 0 0 860px;
      background: red;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 20px;
      box-sizing: border-box;
      .left1 {
        height: 300px;
        background: green;
      }
      .left2 {
        height: 320px;
        background: yellowgreen;
      }
      .left3 {
        height: 280px;
        background: blueviolet;
      }
      .left4 {
        height: 300px;
        background: mediumpurple;
      }
      .left5 {
        height: 360px;
        background: pink;
      }
      .left6 {
        height: 360px;
        background: darkred;
      }
    }
    .right {
      flex: 1;
      background: blue;
      display: flex;
      flex-direction: column;
      .right-top1 {
        height: 206px;
        background: darkred;
      }
      .right-top2 {
        height: 48px;
        background: cadetblue;
      }
      .right-bottom {
        flex: 1;
        display: flex;
        padding-bottom: 20px;
        .right-left {
          display: flex;
          flex-direction: column;
          flex: 0 0 1917px;
          justify-content: space-between;
          .right-left1 {
            height: 999px;
            background: red;
          }
          .right-left2 {
            height: 80px;
            background: yellowgreen;
          }
          .right-left3 {
            height: 350px;
            background: deepskyblue;
          }
          .right-left4 {
            height: 220px;
            background: orangered;
          }
        }
        .right-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          justify-content: space-between;
          .right-right1 {
            height: 999px;
            background: burlywood;
          }
          .right-right2 {
            flex: 1;
            background: darkred;
            margin-top: 20px;
          }
        }
      }
    }
  }
}

.loading-text {
  font-size: 20px;
  margin-top: 10px;
}
</style>
