<template>
  <div>
    <AdminUserDialog/>
<<<<<<< HEAD
=======
    <v-data-table :headers="headers" :items="users" :loading="loading" class="elevation-1" :no-data-text="$t('admin.usersTable.empy')">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{props.item.uid}}</td>
      </template>
    </v-data-table>
>>>>>>> f9b17d0de6034c45d53aabed40083a8d86251819
  </div>
</template>

<script>
  import AdminUserDialog from '@/components/administration/AdminUserDialog.vue' 
  export default {
    name: 'AdminUsers',
    components: {
      AdminUserDialog
    },
    data() {
<<<<<<< HEAD
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
=======
      return {
        headers: [
          {text: this.$t('admin.usersTable.uid'), value: 'uid', align: 'center'},
          {text: this.$t('admin.usersTable.email'), value: 'email', align: 'center'},
          {text: this.$t('admin.usersTable.username'), value: 'username', align: 'center'},
          {text: this.$t('common.actions'), value: 'name', sorteable: false}
        ],
        users: [],
        loading: true
      }
    },
    mounted() {},
    methods: {  
      editUser (user) {
        this.$store.commit('toggleUsersDialog', {editMode: true, user})
      }
    }
>>>>>>> f9b17d0de6034c45d53aabed40083a8d86251819
  }
</script>

<style>

</style>