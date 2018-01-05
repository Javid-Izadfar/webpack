<template>
  <div class="align-center">
    <div class="row">
      <h2 class="all-12 no-margin">\{{msg}}</h2>
    </div>
    <ul class="row">
      <li class="all-4">
        <a href="http://joqd.ikacc.ir" class="link teal-darken-4-text" target="_blank">جغد</a>
      </li>
      <li class="all-4">
        <a href="http://gorbeh.ikacc.ir" class="link teal-darken-4-text" target="_blank">گربه</a>
      </li>
      <li class="all-4">
        <a href="http://vuejs.org" class="link teal-darken-4-text" target="_blank">ویو</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'به ویو با جغد و گربه خوش آمدید'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
