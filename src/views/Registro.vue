<template>
  <div>
    <h1 class="text-center my-5">Registro de Usuario</h1>

    <b-form @submit.prevent="registro" @reset="onReset">
    <div class="alert alert-danger" role="alert" v-show="error[0]" v-for="(item, index) in error" :key="index">
        {{item}}
      </div>
    <!-- correo -->
      <b-form-group id="input-group-1" label="Correo Electrónico:" label-for="input-1" description="Nunca compartiremos tu correo electrónico">
        <b-form-input id="input-1" v-model="email" type="email" placeholder="Ingrese el correo electrónico"></b-form-input>
      </b-form-group>
    
    <!-- nombre -->    
      <b-form-group id="input-group-2" label="Tu Nombre:" label-for="input-2">
        <b-form-input id="input-2" v-model="name" type="text" placeholder="Ingresa tu Nombre"></b-form-input>
      </b-form-group>

    <!-- claves --> 
      <b-form-group id="input-group-2" label="Ingresa una Contraseña:" label-for="input-2">
        <b-form-input id="input-2" v-model="passA" type="password" placeholder="Ingresa Contraseña"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Repite tu Contraseña:" label-for="input-2">
        <b-form-input id="input-2" v-model="passB" type="password" placeholder="Ingresa de nuevo tu Contraseña"></b-form-input>
      </b-form-group>

    <!-- botones -->
      <b-button type="submit" variant="primary" class="mx-2">Registrar</b-button>
      <b-button type="reset" variant="danger" class="mx-2">Borrar</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            passA: '',
            passB: '',
            name: '',
            error: []
        }
    },
    watch: {
      passB(){
          if (this.passA && this.passB && this.passA === this.passB) {
              this.error = [];
          }else if(this.error.length == 0) {
              this.error.push('Las contraseñas no son iguales');
          }
      }  
    },
    methods: {
        registro() {
            this.error = [];
            console.log("registgro");
            const expresionCorreo = /\w+@\w+\.+[a-z]/;
            const expresionNombre = /^[a-zA-ZàáÁÀñÑóÓúÚÖöíÍéÉ\s]/;

            if (!expresionCorreo.test(this.email)){
                this.error.push("Correo Electrónico no es valido");
            }else if(!expresionNombre.test(this.name) || !this.name.length > 2){
                this.error.push('El Nombre no es permitido')
            }else if(!this.passA || !this.passB || this.passA != this.passB || this.passA.length < 6){
                this.error.push('Error en las contraseñas')
            }else{
                firebase.auth().createUserWithEmailAndPassword(this.email,this.passB).then(respuesta => {
                    return respuesta.user.updateProfile({
                        displayName: this.name
                    }).then(()=>{
                        console.log(respuesta);
                        this.error = [];
                        this.name = "";
                        this.email = "";
                        this.passA = "";
                        this.passB = "";
                        let datosUser = {
                            displayName: respuesta.user.displayName,
                            email: respuesta.user.email,
                            emailVerified: respuesta.user.emailVerified,
                            uid: respuesta.user.uid
                        };
                        this.$store.dispatch('usurioRegistro',datosUser)
                    })
                }).catch(error => {
                    console.error(error);   
                })
            }
        },
        onReset(){
            console.log("reset")
        }
  },
}
</script>

<style>

</style>