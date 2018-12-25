<template>
  <div>
    <Auth-form action="register" v-on:process="register($event)" />
    <Toast v-if="toastShow" :show="toastShow" :text="message" :timeout="timeout" />
  </div>
</template>

<script>
  import Auth from '@/components/forms/Auth'
  import Toast from '@/components/Toast'
  export default {
    name: 'Register',
    components: {Toast, 'Auth-form': Auth},
    data() {
      return {
        toastShow: false,
        message: '',
        timeout: 5000
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>
