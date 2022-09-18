<template>
  <t-header>
    {{`${name}-${token}`}}
    <t-button @click="login()">login</t-button>
    <t-button v-if="token!==null" @click="logout()">logout</t-button>
  </t-header>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex'
import { AppRoot } from '../../store/appRoot'
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('appRoot')


export default {
  name: 'FxHeader',
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState<AppRoot>(['token', 'name'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
}

</script>
<!-- 
<style lang="less" scoped>

</style> -->