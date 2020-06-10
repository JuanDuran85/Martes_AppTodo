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
      console.log("login")
    },
    onReset(){
      console.log("reset")
    }
  },
}
</script>
