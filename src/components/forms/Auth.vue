<template>
  <div>
    <v-responsive color="teal" dark height="50">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-1">
              {{ $t(`${action}.title`)}}
            </h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-form v-model="valid">
      <v-text-field :label="$t('auth.email')" v-model="email" :rules="emailRules" name="email" required="true"/>
      <v-text-field :label="$t('auth.password')" v-model="passw" :rules="passwRules" name="passw" type="password" required="true"/>
      <v-text-field v-if="action ==='register'" :label="$t('auth.password_confirmation')" v-model="passwConfirmation" type="password" :rules="passwConfirmationRules" name="passwConfirmation" required="true"/>
      <v-btn @click="submit" color="teal" dark :disabled="!valid">
        {{ $t(`${action}.submit`) }}
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'Auth-form',
    props:{
      action: ''
    },
    data() {
      return {
        valid: false,
        email: '',
        emailRules: [
          (v) => !!v || this.$t('validations.required', {field: 'E-mail'}),
          // eslint-disable-next-line
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.$t('validations.email', {field: 'E-mail'})
        ],
        passw: '',
        passwRules: [
          (v) => !!v || this.$t('validations.required', {field: 'Password'}),
          (v) => v.length >= 6 || this.$t('validations.minLength', {field: 'Password', length: 6})
        ],
        passwConfirmation: '',
        passwConfirmationRules:[
          (v) => !!v || this.$t('validations.required', {field: 'Password'}),
          (v) => v === this.passw || this.$t('validations.password_confirmation')
        ]
      }
    },
    computed: {},
    methods: {
      submit() {
        this.$emit('process', {email: this.email, passw: this.passw})
      }
    }
  }
</script>