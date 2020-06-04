<template>
  <div class="container">
      <h4>Buscar</h4>
      <div class="ml-auto">
        <input type="text" v-model="busqueda" placeholder="Ingresa un dato para la busqueda">
        <input type="checkbox" class="form-check-input ml-4" v-model="completo">
        <label class="ml-5 form-check-label" for="exampleCheck1">Completo</label>
      </div>
      <h1>Lista de cursos</h1>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(curso,index) in traerCursos" :key="index">
            <div class="card" :class="{gradiente: curso.completed}">
                <div class="w-100">
                    <img :src="curso.image" class="card-img-top img_wh" :alt="curso.name">
                </div>
                <div class="card-body">
                    <h5 class="card-title" v-text="curso.name"></h5>
                    <p class="card-text" v-text="curso.description"></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" :class="{gradiente: curso.completed}">El curso esta terminado: {{curso.completed ? 'Si': 'No'}}</li>
                    <li class="list-group-item" :class="{gradiente: curso.completed}">Precio</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-success mx-2" @click="completado(curso.id)">{{curso.completed ? 'Acualizado' : 'Actualizar'}}</button>
                    <button @click="eliminarCurso(curso.id)" type="button" class="btn btn-danger mx-2">Eliminar</button>
                    <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#ID'+curso.id">Editar</button>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" :id="'ID'+curso.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editando Curso {{curso.name}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="nombrecurso">Editar Nombre del Curso</label>
                            <input type="text" class="form-control" :placeholder="curso.name" v-model="nuevoNombre">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Editar Descripción del Curso</label>
                            <textarea class="form-control" rows="3" :placeholder="curso.description" v-model="nuevaDescripcion"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="nombrecurso">Editar Enlace de Imagen del Curso</label>
                            <input type="text" class="form-control" :placeholder="curso.image" v-model="nuevaImagen">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="nuevoDatosCurso(curso.id)">Guardar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TodoLista',
    data() {
        return {
            nuevaDescripcion: '',
            nuevoNombre: '',
            nuevaImagen: '',
            busqueda: '',
            completo: false
        }
    },
    computed: { 
        traerCursos(){
            return this.$store.getters.enviadoCursos.filter(datos =>{
                return datos.name.toLowerCase().includes(this.busqueda.toLowerCase())
            })
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
        },
        nuevoDatosCurso(id){
            let datosNuevosCurso = {
                name: this.nuevoNombre,
                description: this.nuevaDescripcion,
                image: this.nuevaImagen,
                id: id
            };
            console.log(datosNuevosCurso)
            if (this.nuevoNombre && this.nuevaImagen && this.nuevaDescripcion){
                this.$store.dispatch('CursoDatosNuevos',datosNuevosCurso)
                this.nuevoNombre = "";
                this.nuevaImagen = ""; 
                this.nuevaDescripcion = "";
            }else{
                console.log("Ingrese datos para modificar");
                this.nuevoNombre = "";
                this.nuevaImagen = ""; 
                this.nuevaDescripcion = "";
            }
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
    .img_wh {
        height: 25vh;
    }
</style>