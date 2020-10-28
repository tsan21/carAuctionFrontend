<template>
  <div class="registerLogin">
    <Register v-if="showRegister"/>
    <Login v-if="showLogin"/>
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Register,
    Login
  },

  data: function(){
    return {
      showLogin: false,
      showRegister: true,
    }
  },

  methods: {
    showLoginHideRegister(){
      this.showLogin = true;
      this.showRegister = false;
    },

  },
  
}
</script>
