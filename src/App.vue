<template>
  <div id="app">
    <v-app-bar color="#ffffff">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title style="margin-left: 2px">Car Auction</v-toolbar-title>
      <router-link style="text-decoration: none; color: inherit" to="/">
      </router-link>

      <v-tabs>
        <v-tab to="/"> Home </v-tab>
        <v-tab v-if="isLoggedIn" to="/myAuctions"> My auctions </v-tab>
      </v-tabs>

      <v-text-field
        v-model="search"
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search for cars"
      ></v-text-field>

      <v-btn
        style="
          background-color: #42b983;
          margin-left: 15px;
          height: 48px;
          width: 100px;
        "
        depressed
        id="btnSignUp"
        color="primary"
        @click="() => $router.push('RegisterLogin')"
      >
        Sign up
      </v-btn>

      <v-btn 
        id="btnLogout"
        icon
        @click="logout"
        >
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: () =>({
    search: "",
  }),
  methods: {
    logout: function(){
        this.$store.dispatch('logout')
        .then(() => {
        this.$router.push('/RegisterLogin')
      })
    }
  },
  computed: {
    isLoggedIn: function(){
      return this.$store.getters.isLoggedIn
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-btn__content {
  font-family: "Roboto", sans-serif;
  text-transform: none;
  font-size: 20px;
  font-weight: normal;
}

.v-tabs {
  font-family: "Roboto", sans-serif !important;
  width: 100px !important;
  margin-left: 15px !important;
}

.v-tab--active,
.v-tabs-slider {
  font-family: "Roboto", sans-serif !important;
  color: #42b983 !important;
  text-transform: none !important;
  font-weight: bold !important;
}

.v-tab:not(.v-tab--active) {
  text-transform: none !important;
  font-weight: bold !important;
}
</style>


