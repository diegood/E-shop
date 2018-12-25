<template>
  <main>
    <v-app>
      <v-content class="mt-0 pt-0">
        <guest-navigation></guest-navigation>
        <v-container>
          <router-view class="mt-2"/>
        </v-container>
        <app-footer/>
      </v-content>
    </v-app>
  </main>
</template>

<script>
  import GuestNavigation from '@/navigations/guest'
  import AppFooter from '@/Components/Footer'
  export default {
    name: 'App',
    components: {
      GuestNavigation,
      AppFooter
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
