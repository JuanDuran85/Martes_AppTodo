<template>
  <div>
    <navegacion></navegacion>
    <router-view class="container mt-3" />
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';

export default {
  name: 'App',
  components: {
    Navegacion
  }
}
</script>
