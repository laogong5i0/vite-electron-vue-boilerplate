<template>
  <div class="home">
    <div>{{name}}</div>
    <t-button @click="onclick" >更新名称</t-button>
    <img alt="Vue logo" src="../assets/vue.svg">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return {
      name: 'pat'
    }
  },
  created(){
    this.name = 'laogong5i0'
  },
  methods:{
    onclick(e:Event){
      this.name = "chenjianping"
    }
  }
})
</script>
