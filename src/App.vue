<template>
  <main>
    <v-app>
      <v-content>
        <guest-navigation></guest-navigation>
        <v-container class="mb-3">
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </main>
</template>

<script>
  import GuestNavigation from '@/navigations/guest'
  export default {
    name: 'App',
    components: {
      GuestNavigation
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
