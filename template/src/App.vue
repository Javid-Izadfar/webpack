<template>
  <div id="app" class="grey-lighten-5">
    <div class="container">
      <div class="row">
        <div class="vue-logo all-3 double-gutter">
          <img src="./assets/images/logo.png" class="responsive">
        </div>
      </div>
      <div class="row">
        <div class="all-6 all-offset-3">
          {{#router}}
          <router-view></router-view>
          {{else}}
          <hello-world></hello-world>
          {{/router}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
{{#unless router}}
import HelloWorld from './components/HelloWorld'

{{/unless}}
export default {
  name: 'app'{{#router}}{{else}},
  components: {
    HelloWorld
  }{{/router}}
}
</script>

<style src="./assets/postcss/style.pcss"></style>
<style scoped>
  #app{
    min-height: 100vh;
    padding: 12rem 0}
  .vue-logo{margin: auto}
</style>
