<template>
  <div>
    <h1>{{ titulo }}</h1>
    <input type="text" v-model="agregar" placeholder="Agregar un curso" />
    <button @click="agregarCurso">Agregar</button>
  </div>
</template>

<script>
export default {
  name: "TodoAdd",
  data() {
    return {
      titulo: "Agregar Cursos",
      agregar: "",
    };
  },
  methods: {
    agregarCurso() {
      if (this.agregar) {
        this.$store.dispatch("agregarCursoVuex", this.agregar);
        //this.agregar = "";
        console.log("Curso agregado a la lista");
      } else {
        console.log("Ingrese un curso");
      }
    },
  },
};
</script>
