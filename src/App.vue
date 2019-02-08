<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
      <h1>DEEPA</h1>
      <template v-for="variant in ['primary','secondary','success','outline-success','warning','danger','link']">
          <div class="col-md-4 pb-2" v-for="size in ['sm','','lg']" :key="`${variant}_${size}`">
              <b-button :size="size" :variant="variant">
                  {{variant}} {{size}}
              </b-button>
          </div>
      </template>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
