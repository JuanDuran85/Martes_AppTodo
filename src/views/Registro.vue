<template>
  <div>
    <h1 class="text-center my-5">Registro de Usuario</h1>

    <b-form @submit.prevent="onSubmit" @reset="onReset">
      
    <!-- correo -->
      <b-form-group id="input-group-1" label="Correo Electrónico:" label-for="input-1" description="Nunca compartiremos tu correo electrónico">
        <b-form-input id="input-1" v-model="email" type="email" required placeholder="Ingrese el correo electrónico"></b-form-input>
      </b-form-group>
    
    <!-- nombre -->    
      <b-form-group id="input-group-2" label="Tu Nombre:" label-for="input-2">
        <b-form-input id="input-2" v-model="name" type="text" required placeholder="Ingresa tu Nombre"></b-form-input>
      </b-form-group>

    <!-- claves --> 
      <b-form-group id="input-group-2" label="Ingresa una Contraseña:" label-for="input-2">
        <b-form-input id="input-2" v-model="passA" type="password" required placeholder="Ingresa Contraseña"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Repite tu Contraseña:" label-for="input-2">
        <b-form-input id="input-2" v-model="passB" type="password" required placeholder="Ingresa de nuevo tu Contraseña"></b-form-input>
      </b-form-group>

    <!-- botones -->
      <b-button type="submit" variant="primary">Registrar</b-button>
      <b-button type="reset" variant="danger">Borrar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            passA: '',
            passB: '',
            name: ''
        }
    },
}
</script>

<style>

</style>