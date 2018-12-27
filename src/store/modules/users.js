export default {
  state: {
    dialog: false,
    editMode: false,
    user:{
      uid: null,
      email: '',
      username: ''
    }
  },
  mutations: {
    toggleUsersDialog: (state, data) => {
      state.dialog = !state.dialog
      state.editMode = data.editMode
      state.user = data.user
    }
  },
  getters: {
<<<<<<< HEAD
    userDialog: (state) => {
=======
    usersDialog: (state) => {
>>>>>>> f9b17d0de6034c45d53aabed40083a8d86251819
      return state.dialog
    },
    userForEdit: (state) => {
      return state.user
    },
    usersDialogEditMode: (state) => {
      return state.editMode
    }
  }
}