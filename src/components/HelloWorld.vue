<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div><a v-bind:[attributeName]="url">...</a></div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: 'https://cn.vuejs.org/v2/guide/syntax.html',
      attributeName: 'href'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
