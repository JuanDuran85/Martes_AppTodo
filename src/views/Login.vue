<template>
  <div class="mt-5">
    <h1 class="text-center my-5">Login de Usuario</h1>

    <b-form @submit.prevent="login" @reset="onReset">
      <div class="alert alert-danger" role="alert" v-show="error">
        {{error}}
      </div>
    <!-- correo -->
      <b-form-group id="input-group-1" label="Correo Electrónico:" label-for="input-2">
        <b-form-input id="input-2" v-model="email" type="email" required placeholder="Ingrese el correo electrónico"></b-form-input>
      </b-form-group>
    <!-- claves --> 
      <b-form-group id="input-group-2" label="Ingresa una Contraseña:" label-for="input-3">
        <b-form-input id="input-3" v-model="clave" type="password" required placeholder="Ingresa Contraseña"></b-form-input>
      </b-form-group>
    <!-- botones -->
      <b-button type="submit" variant="primary" class="mx-2">Entrar</b-button>
      <b-button type="reset" variant="danger" class="mx-2">Borrar</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase';
import Swal from 'sweetalert2';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    login() {
      this.error = '';
      const expresionCorreo = /\w+@\w+\.+[a-z]/;

      if (!expresionCorreo.test(this.email)){
          this.error = "Correo Electrónico no es valido";
      }else if(!this.clave || this.clave.length < 6){
          this.error = 'Error en las contraseñas';
      }else{
        firebase.auth().signInWithEmailAndPassword(this.email,this.clave)
        .then(respuesta=>{
          let datosUser = {
            displayName: respuesta.user.displayName,
            email: respuesta.user.email,
            emailVerified: respuesta.user.emailVerified,
            uid: respuesta.user.uid
          };
          this.error = '';
          this.email = '';
          this.clave = '';
          this.$store.dispatch('usurioRegistro',datosUser);
          this.$router.push('/');
        })
        .catch(error=>{
          console.log(error);
          if (error.code == 'auth/user-not-found'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El usuario no existe en nuestra base de datos',
              footer: '<b>AppToDo</b>'
            });
          }else if(error.code == 'auth/wrong-password'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El Correo y/o Contraseña no son validos',
              footer: '<b>AppToDo</b>'
            });
          }
        })
      }
    },
    onReset(){
      console.log("reset")
      this.error = '';
    }
  },
}
</script>
