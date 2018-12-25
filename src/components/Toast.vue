<template>
  <v-snackbar :timeout="timeout" :color="color" v-model="showToast">
    {{text}}
    <v-btn dark flat @click="showToast = false">{{$t('messages.close')}} </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    name: 'Toast',
    props: ['show', 'timeout', 'text'],
    data() {
      return {
        color: 'primary',
        mode: 'horizontal',
        showToast: this.show
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>
