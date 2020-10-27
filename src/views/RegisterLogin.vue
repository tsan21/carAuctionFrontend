<template>
  <div class="registerLogin">
    <Register/>
    <!-- <Login/> -->
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
// import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Register,
    // Login
  }
}
</script>
