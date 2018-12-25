<template>
  <v-footer>
    <v-card flat tile class="grey white--text text-xs-center fter">
      <v-card-text class="white--text pt-2" style="width: 100%;">
        {{$t('footer.explain_system')}}
      </v-card-text>
      <v-card-text class="white--text ">
        desarrollado por
        <a class="white--text" href="https://www.linkedin.com/in/diego-arias-galeano/" title="Mi linkedin">
          <v-avatar size="45" color="grey lighten-4">
            <img src="https://media.licdn.com/dms/image/C5603AQFtLuPJZEGKaw/profile-displayphoto-shrink_200_200/0?e=1551312000&v=beta&t=wVhVRb72tqlqt4OsXCbYhBV4JivTzhseMqipI1Ei1hA" alt="avatar">
          </v-avatar>
          <strong>Diego Gaston Arias</strong>
        </a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>
<style scoped>
    .fter{
    position: absolute;
    bottom: 0;
    }
</style>
