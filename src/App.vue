

<template>
  <t-layout>
    <fx-header></fx-header>
    <t-content>
        <div>Content</div>
        <router-view />
      </t-content>
  </t-layout>
  <!-- <div>
    <div class="logo-box">
      <img class="logo vite" src="./assets/vite.svg">
      <img class="logo electron" src="./assets/electron.svg">
      <img class="logo vue" src="./assets/vue.svg">
    </div>
    <Hello-World msg="Hello Vue 3 + TypeScript + Vite" />
    <div class="static-public">
      Place static files into the <code>/public</code> folder rr
      <img style="width:77px;" :src="'./node.png'">
    </div>
    <div>iiii</div>
    
  </div> -->
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import FxHeader from './components/header/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    FxHeader

  }
}
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-box {
  display: flex;
  width: 100%;
  justify-content: center;
}

.static-public {
  display: flex;
  align-items: center;
  justify-content: center;
}

.static-public code {
  background-color: #eee;
  padding: 2px 4px;
  margin: 0 4px;
  border-radius: 4px;
  color: #304455;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
