<template>
    <div class="container">

      <form v-on:submit.prevent="requestLogin" class="form-signin">
      <div class="container">
          <div id="header" class="row"> 
            <h1 class="col-md-1 col-md-offset-3">WIMD</h1>
            <div class="col-md-1 image"></div>​
            <h1 class="col-md-4">- Your Health Advisor</h1>
           </div>
           <div id="inputLoginForm">
          <div class="row">
                <div class="col-md-3 col-md-offset-4">
                <input type="text" id="inputName" class="form-control" placeholder="Name" v-model="Name" required autofocus>
                </div>          
          </div>
          <div class="row">
                <div class="col-md-3 col-md-offset-4">
                <input type="text" id="inputUsername" class="form-control" placeholder="Username" v-model="Username" required autofocus>
                </div>          
          </div>
          <div class="row">
                <div class="col-md-3 col-md-offset-4">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email" v-model="Email" required autofocus>
                </div>          
          </div>
          <div class="row">
                <div class="col-md-3 col-md-offset-4">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="Password" required>
                </div>
          </div>
          <div class="row">
                <div class="col-md-3 col-md-offset-4">
                <button id="btn-Register" class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                </div>
          </div>
          </div>
      </div>
      </form>

    </div> <!-- /container -->
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {failed:false,Name:'', Username:'',Password:'', Email: ''}     //todo
  },
  methods:{
      requestLogin:function(){
                this.$root.auth=true;
      }
  }
}
</script>