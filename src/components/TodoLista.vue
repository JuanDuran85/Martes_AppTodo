<template>
  <div class="container">
      <h1>Lista de cursos</h1>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(curso,index) in traerCursos" :key="index">
            <div class="card" :class="{gradiente: curso.completed}">
                <div class="card-body">
                    <h5 class="card-title" v-text="curso.name"></h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{curso.id}}</h6>
                    <p class="card-text">El curso esta terminado: {{curso.completed ? 'Si': 'No'}}</p>
                    <button type="button" class="btn btn-success mx-2" @click="completado(curso.id)">{{curso.completed ? 'Acualizado' : 'Actualizar'}}</button>
                    <button @click="eliminarCurso(curso.id)" type="button" class="btn btn-danger mx-2">Eliminar</button>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TodoLista',
    computed: { 
        traerCursos(){
            return this.$store.getters.enviadoCursos;
        } 
    },
    methods: { 
        eliminarCurso(id){
            if (confirm('Desea eliminar')) {
                this.$store.dispatch('eliminarCurso',id);
            }
        },
        completado(id){
            this.$store.dispatch('actualizar',id)
        }
    }
}
</script>

<style>
    .gradiente{
        background: #808080;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3fada8, #808080);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3fada8, #808080); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>