<template>
  <div id="app">
    <PrismEditor class="container mt-54px"></PrismEditor>
  </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>




<script>
import Editor from './Editor.vue'


export default {
  name: 'App',
  data() {
    return {
      code: null,
      lineNumbers: true
    };
  },
  components: {
    PrismEditor,
    App,
  }
}
</script>