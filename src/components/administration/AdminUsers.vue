<template>
  <div>
    <AdminUserDialog/>
    <v-data-table :headers="headers" :items="users" :loading="loading" class="elevation-1" :no-data-text="$t('admin.usersTable.empy')">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{props.item.uid}}</td>
      </template>
    </v-data-table>
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
  }
</script>

<style>

</style>