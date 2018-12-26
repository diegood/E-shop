<template>
  <div>
    <Auth-form action="login" v-on:process="login($event)" />
    <Toast v-if="toastShow" :show="toastShow" :text="message" :timeout="timeout" />
  </div>
</template>

<script>
  import Auth from '@/components/forms/Auth'
  import Toast from '@/components/Toast'
  import {db} from '@/main'
  export default {
    name: 'Login',
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
    methods: {
      login (user) {
        this.$store.dispatch('firebaseLogin', user)
        .then(data => {
          db.collection('users').doc(data.user.uid).onSnapshot(ss => {
            this.$router.push('/')
          })
        })
        .catch((error) => {
          this.message = error.message
          this.toastShow = true
          setTimeout(() => {
            this.toastShow = false
          }, this.timeout)
        })
      }
    }
  }
</script>