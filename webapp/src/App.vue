<template>
  <div id="app">
    <navbar v-if="auth" v-on:loggedOut="loggedOut"></navbar>
    <sidebar v-if="auth" ></sidebar>
    <router-view v-if="auth"></router-view>

    <login v-on:loggedIn="loggedIn" v-if="!auth"></login>
  </div>
</template>

<script>

import Login from './components/Login'
import Register from './components/Register'

export default {
  name: 'app',
  data:function(){
    return {auth:this.$root.auth}
  },
  components: {
    Login,
    Register
  },
  methods:{
    loggedIn:function(){
      this.auth=true;
    },
    loggedOut:function(){
      this.auth=false;
    }
  }
}
</script>

