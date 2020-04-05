<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <h1>app的h1</h1>
    <div class="btn-group">
      <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
        Action
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <!-- dropdown menu links -->
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    this.$http.get('https://randomuser.me/api/')
    .then(res=>{
      console.log(res.data);
    })
  }
}
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
</style>
