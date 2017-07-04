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
          <hello></hello>
          {{/router}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style src="./assets/style.pcss"></style>
<style scoped>
  #app{
    min-height: 100vh;
    padding: 12rem 0}
  .vue-logo{margin: auto}
</style>
