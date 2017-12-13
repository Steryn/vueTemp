<template>
  <div>content</div>
</template>
<script>
import gender from "../common.js";
export default {
  name: "content",
  data() {
    return {
      msg: ""
    };
  },
  methods:{
    onload:function(){
      console.log(gender)
    }
  },
  mounted(){
    this.onload();
  }
};
</script>