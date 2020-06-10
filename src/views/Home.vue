<template>
  <div>
    <div class="d-block">
      <h1 class="d-inline-block">Bienvanido {{usuarioNombre.displayName}}</h1>
      <b-button class="ml-4 d-inline-block mb-3" variant="secondary" v-if="usuarioNombre.displayName" @click="logOutUser">LogOut</b-button>
    </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda cupiditate voluptas ad amet ducimus non, obcaecati eos in ab accusantium velit. Voluptatibus cumque rerum, sit magnam expedita praesentium nihil!</p>
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    <b-icon icon="arrow-up"></b-icon>
    <b-icon icon="exclamation-triangle"></b-icon>
    <div v-if="usuarioNombre.uid">
      <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </div>
    <div v-else>
      <b-alert show variant="secondary">No existe usuario conextado...</b-alert>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Home',
  computed: {
    usuarioNombre(){
      return this.$store.getters.enviandoUsuario
    }
  },
  methods: {
    logOutUser(){
      firebase.auth().signOut().then(()=>{
        let datosUser = {
          displayName:'',
          email: '',
          emailVerified: '',
          uid: ''
        };
        this.$store.dispatch('usurioRegistro',datosUser);
        this.$router.push('/login');
      })
    }
  },
}
</script>
