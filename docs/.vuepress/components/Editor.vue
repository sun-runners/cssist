<template>
  <div>
    <h2>Your code here:</h2>
    <!-- <input type="checkbox" v-model="lineNumbers"> Linenumbers -->
    <div class="w-100 h-400px b-EAEAEA mb-10px">
      <vue-prism-editor id="prism" v-model="codes" language="js" :line-numbers="lineNumbers" class="my-editor" style="width:100"/>
    </div>
    <div id="output"  v-html="codes" class="w-95 h-600px b-le50 bo-1px bo-yw50 p-20px">
    </div>

  </div>
</template>

<style>
.prism-editor__code{ 
  height: 400px;
}
#output h2 {
  border-bottom: 0;
}
</style>

<script>


import '../public/assets/css/cssist.js'
import VuePrismEditor from "vue-prism-editor";
import "vue-prism-editor/dist/VuePrismEditor.css"; // import the styles
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";



export default {
  name: 'Editor',
  components: {
    VuePrismEditor,
  },
  props:{
    codes: '',
  },
  data() {
    return {
      message: 'Animal kang prism ka',
      lineNumbers: true,
      from_markdown: "<div class='w-100px h-100px b-rd50'></div>",
      textarea: ''
    }
  },
  methods:{
    sendPrism(){
      console.log(codes)
      // document.getElementById('prism').value = this.from_markdown.toString()
      // document.getElementById('textarea_field').value = this.from_markdown.toString()
      // document.getElementById('input_field').value = this.from_markdown.toString()
    }
  },
  template: `
  <div>
  <h2>Your code here:</h2>
  <input type="checkbox" v-model="lineNumbers"> Linenumbers
  <div class="w-100 h-400px b-EAEAEA mb-10px">
    <vue-prism-editor v-model="codes" language="js" :line-numbers="lineNumbers" class="my-editor" style="width:100"/>
  </div>
  <div id="output"  v-html="codes" class="w-100 h-600px b-le50 bo-1px bo-yw50">

  </div>

</div>
  `
}
</script>