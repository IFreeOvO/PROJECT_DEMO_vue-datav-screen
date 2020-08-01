<template>
  <div id="app">
    <!-- <svg width="50" height="50">
        <use href="#more"></use>
      </svg>
      <svg width="50" height="50">
        <use href="#filledArrowRight"></use>
      </svg>
      <svg width="50" height="50">
        <use href="#arrowRight"></use>
      </svg> -->

    <!-- <Icon name="arrowRight" :style="{width: 50, height: 50}"></Icon> -->

    <!-- <svg-animation></svg-animation> -->

    <!-- <imooc-loading
        width="500"
        height="200"
        duration='1.5'
      >加载中...</imooc-loading>

      <div class="box">
        <imooc-fly-box starLength="200" duration="3">
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
        </imooc-fly-box>
      </div>

      <div class="box1">
        <imooc-fly-box starLength="200" duration="3">
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
        </imooc-fly-box>
      </div> -->

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
