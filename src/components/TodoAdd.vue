<template>
  <div>
    <h1>{{ titulo }}</h1>
    <form>
      <div class="form-group">
        <label for="nombrecurso">Nombre del Curso</label>
        <input type="text" class="form-control" v-model="agregar" placeholder="Agregar un curso">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Descripción del Curso</label>
        <textarea class="form-control" rows="3" v-model="descripcion"></textarea>
      </div>
      <div class="form-group">
        <label for="nombrecurso">Enlace de Imagen del Curso</label>
        <input type="text" class="form-control" v-model="imagen" placeholder="https://www.dominio.com/imagen.png">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" v-model="completo">
        <label class="form-check-label" for="exampleCheck1">Completo</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="agregarCurso">Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoAdd",
  data() {
    return {
      titulo: "Agregar Cursos",
      agregar: "",
      descripcion: "",
      imagen: "",
      completo: false
    };
  },
  methods: {
    agregarCurso() {
      let datosCompletos = {
        name: this.agregar,
        image: this.imagen,
        description: this.descripcion,
        completed: this.completo
      }
      if (this.agregar && this.descripcion && this.imagen) {
        this.$store.dispatch("agregarCursoVuex", datosCompletos);
        this.agregar = "";
        this.imagen = "";
        this.completo = false;
        this.descripcion = "";
        console.log("Curso agregado a la lista");
      } else {
        console.log("Ingrese un curso");
      }
    },
  },
};
</script>
