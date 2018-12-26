import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  state: {
    user: null,
    role: 'guest',
    logged: false
  },
  actions: {
    firebaseRegister: ({commit}, user) => {
      return firebase.auth().createUserWithEmailAndPassword(user.email, user.passw)
    },
    firebaseLogin: ({commit}, user) => {
      return firebase.auth().signInWithEmailAndPassword(user.email, user.passw)
    },
    firebaseLogout: () => {
      return firebase.auth().signOut()
    }
  },
  mutations: {
    setUser: (state, user) => {
      if (user) {
        state.user = {
          uid: user.uid,
          email: user.email
        }
        state.logged = true
      } else {
        state.user = null
        state.logged = false
      }
    },
    setRole: (state, role) => {
      state.role = role
    }
  },
  getters:{
    logged: (state) => {
      return !!state.user
    },
    role: (state) => {
      return state.role
    },
    isCustomer: (state) => {
      return state.role === 'customer'
    }
  }
}