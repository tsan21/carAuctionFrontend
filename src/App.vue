<template>
  <div id="app">

    <v-app id="inspire">
      <v-app-bar>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Car Auction</v-toolbar-title>
  
        <router-link style="text-decoration: none; color: inherit;" to="/">
        </router-link>
        <v-tabs >
          <v-tab to="/about"> About </v-tab>
          <v-tab to="/"> Home </v-tab>
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
          depressed
          color="primary"
        >
          Sign up
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <router-view></router-view>

  </v-app>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-toolbar__content{
  border-bottom: 1px solid #D3D3D3;
}

.v-btn:not(.v-btn--round).v-size--default{
  margin-left: 25px;
  height: 48px !important;
  width: 100px;
  background-color: #42b983 !important;
}

.v-btn__content{
  font-family: "Roboto", sans-serif !important;
  text-transform: none;
  font-size: 20px;
  font-weight: normal;
}

.v-tabs{
  width: 100px !important;
  margin-left: 15px !important;
}

.v-tab--active, .v-tabs-slider{
  color:#42b983!important;
}

// .v-tab:not(.v-tab--active){
//   color:black !important;
// }

</style>
