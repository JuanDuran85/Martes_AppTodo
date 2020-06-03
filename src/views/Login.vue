<template>
  <div class="mt-5">
    <form class="mt-4">
      <div class="alert alert-danger" role="alert" v-show="error">
        {{error}}
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Ingrese el Corro Electrónico</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Ingresa tu correo electrónico" v-model="correo">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Ingrese la Contraseña</label>
        <input type="password" class="form-control" placeholder="**********" v-model="clave">
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      correo: '',
      clave: '',
      error: ''
    }
  },
}
</script>
