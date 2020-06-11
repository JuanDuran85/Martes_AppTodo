<template>
  <div>
    <navegacion></navegacion>
    <router-view class="container mt-3" :usuarioInfo="usuarioInfo"/>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  data() {
    return {
      usuarioInfo: {}
    }
  },
  components: {
    Navegacion
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        console.log(user.displayName)
        this.usuarioInfo = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          uid: user.uid
        }
      } else {
        console.log("No hay usuario");
          this.usuarioInfo = {
            displayName: '',
            email: '',
            emailVerified: '',
            uid: ''
          }
      }
    })
  },
}
</script>
