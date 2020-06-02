<template>
  <div>
    <h1>{{ titulo }}</h1>
    <input type="text" v-model="agregar" placeholder="Agregar un curso">
    <button @click="agregarCurso">Agregar</button>
  </div>
</template>

<script>
export default {
  name: 'TodoAdd',
  data() {
    return {
      titulo: 'Lista de Cursos',
      agregar: '',
    }
  },
  methods: { 
    agregarCurso(){
      if (this.agregar){
        this.$store.dispatch('agregarCursoVuex',this.agregar);
      }else {
        alert('Ingrese un curso');
      }
    }
  }
}
</script>
