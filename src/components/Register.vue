<template>
  <div>
    <Auth-form action="register" v-on:process="register($event)" />
    <Toast v-if="toastShow" :show="toastShow" :text="message" :timeout="timeout" />
  </div>
</template>

<script>
  import Auth from '@/components/forms/Auth'
  import Toast from '@/components/Toast'
  import {db} from '@/main'
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
    methods: {
      register(user) {
        this.$store.dispatch('firebaseRegister', user)
        .then((userRegistered) => {
          let data = {
            uid: userRegistered.user.uid,
            email: user.email,
            role: 'customer'
          }
          db.collection('users').doc(userRegistered.user.uid).set(data).then(() => {
            this.$store.commit('setRole', data.role)
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
