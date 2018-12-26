<template>
  <main>
    <v-app>
      <v-content class="mt-0 pt-0" v-if="$store.state.loaded">
        <guest-navigation v-if="role === 'guest'"/>
        <admin-navigation v-if="role === 'admin'"/>
        <v-container>
          <router-view class="mt-2"/>
        </v-container>
        <app-footer/>
      </v-content>
      <v-container v-else fill-height>
        <v-layout flex align-center justify-center>
          <v-progress-circular indeterminate size="100" width="10" color="red" />
        </v-layout>
      </v-container>
    </v-app>
  </main>
</template>

<script>
  import GuestNavigation from '@/navigations/guest'
  import AdminNavigation from '@/navigations/admin'
  import AppFooter from '@/Components/Footer'
  import {mapGetters} from 'vuex'
  export default {
    name: 'App',
    components: {
      GuestNavigation,
      AdminNavigation,
      AppFooter
    },
    computed: {
      ...mapGetters(['role']) 
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
