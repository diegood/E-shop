<template>
    <v-jumbotron color="grey lighten-2">
      <v-container fill-height>
        <v-layou align-center>
          <v-flex>
            <h3 class="display-3">{{ $t('welcome.title', {app: 'mercado de muestra Libre'})}}</h3>
            <span class="subheading">
              {{$t('welcome.content')}}
            </span>
            <v-divider class="my-3" />
            <div class="title mb-3">
              {{$t('welcome.call_to_action')}}
            </div>
            <v-btn large color="primary" class="mx-0" to="/login">{{$t('welcome.action_button')}}</v-btn>
          </v-flex>
        </v-layou>
      </v-container>
    </v-jumbotron>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<style>

</style>
