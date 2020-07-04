<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
      <div class="icon">
        <test-component></test-component>
      </div>
      <svg width="50" height="50">
        <use href="#more"></use>
      </svg>
      <svg width="50" height="50">
        <use href="#filledArrowRight"></use>
      </svg>
      <svg width="50" height="50">
        <use href="#arrowRight"></use>
      </svg>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.icon {
  color: green;
  height: 100px;
  width: 100px;
}
</style>
