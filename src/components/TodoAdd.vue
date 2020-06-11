<template>
  <div>
    <h1>{{ titulo }}</h1>

    <b-form @submit.prevent="agregarCurso" @reset="onReset">
    <!-- nombre del curso -->
      <b-form-group id="input-group-1" label="Nombre del Curso:" label-for="input-1" description="Ingresa el nombre del curso que quieres guardar">
        <b-form-input id="input-1" v-model="agregar" type="text" placeholder="Ingrese el nombre del curso"></b-form-input>
      </b-form-group>
    
    <!-- descripcion -->    
      <b-form-group id="input-group-2" label="Descripción del Curso:" label-for="input-2">
        <b-form-textarea id="textarea" v-model="descripcion" placeholder="Copia una descripción del curso..." rows="3" max-rows="6"></b-form-textarea>
      </b-form-group>

      <!-- imagen del curso --> 
      <b-form-group id="input-group-1" label="Enlace de Imagen del Curso:" label-for="input-1" description="Ingresa una URL de la imagen del curso">
        <b-form-input id="input-1" v-model="imagen" type="text" placeholder="https://www.dominio.com/imagen.png"></b-form-input>
      </b-form-group>

    <!-- completo --> 
      <b-form-checkbox id="checkbox-1" v-model="completo" value="true" unchecked-value="false">Completo</b-form-checkbox>
      <div>Completo: <strong>{{ completo }}</strong></div>

    <!-- botones -->
    <div class="mt-3">
      <b-button type="submit" variant="primary" class="mx-2">Agregar</b-button>
      <b-button type="reset" variant="danger" class="mx-2">Borrar</b-button>
    </div>
    </b-form>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

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
      } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe ingresar los datos solicitados',
            footer: '<b>AppToDo</b>'
          }); 
      }
    },
    onReset(){
      console.log("reset");
    }
  },
};
</script>
