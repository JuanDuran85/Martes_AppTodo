import Vue from 'vue';
import Vuex from 'vuex';
import { db } from "../main";
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: JSON.parse(localStorage.getItem("usuario")) || {},
    cursosLista: []
  },
  getters: {
    enviadoCursos(state){
      return state.cursosLista;
    },
    enviandoUsuario(state){
      return state.usuario;
    }
  },
  mutations: {
    traerCursoDB(state){
      db.collection("cursos_prueba").doc("usuario").collection("agregados").onSnapshot(datos => {
        let auxiliar = [];
        datos.forEach(elementos=>{
          auxiliar.push({
            idDoc: elementos.id,
            id: elementos.data().id,
            name: elementos.data().name,
            image: elementos.data().image,
            description: elementos.data().description,
            completed: elementos.data().completed       
          })
        })
        state.cursosLista = auxiliar;
      })
    },
    deleteCurso(state, id){
      let cursoPorBorrar = state.cursosLista.findIndex(valor => valor.id === id);
      console.log(cursoPorBorrar)
      state.cursosLista.splice(cursoPorBorrar,1)
      setTimeout(()=>{
        alert('Borrado con éxito')
      },500);
    },
    updateCurso(state,id){
      let actualizado = state.cursosLista.find(result => result.id == id);
      actualizado.completed = !actualizado.completed;
    },
    mutandoDatosNuevos(state, recibidoDatosNuevos){
      let filtroID = state.cursosLista.find(result => result.id == recibidoDatosNuevos.id);
      filtroID.name = recibidoDatosNuevos.name;
      filtroID.description = recibidoDatosNuevos.description;
      filtroID.image = recibidoDatosNuevos.image;
    },
    updateUsuario(state,datosUsuarioRecibido){
      localStorage.setItem("usuario", JSON.stringify(datosUsuarioRecibido));
      state.usuario = datosUsuarioRecibido;
    }
  },
  actions: {
    agregarCursoVuex(context,recibidoCurso){
      let idNuevo = Math.floor(Math.random()*10);

      while (idNuevo > -1){
        let busqueda = context.state.cursosLista.find(result => result.id == idNuevo);
        if (busqueda == undefined){
          break;
        } else if (busqueda.id == idNuevo){
          idNuevo++;
        }
      }
  
      db.collection("cursos_prueba").doc("usuario").collection("agregados").add({
        id: idNuevo,
        name: recibidoCurso.name,
        image: recibidoCurso.image,
        description: recibidoCurso.description,
        completed: recibidoCurso.completed
      }).then(()=>{
        Swal.fire(
          'Muy bien!',
          'Curso Agregado!',
          'success'
        )
      }).catch((error)=>{
        console.log(error);
      })
    },
    eliminarCurso(context, id){
      context.commit('deleteCurso',id)
    },
    actualizar(context,id){
      context.commit('updateCurso',id);
    },
    CursoDatosNuevos(context, recibidoDatosNuevos){
      context.commit('mutandoDatosNuevos',recibidoDatosNuevos);
    },
    usurioRegistro(context, datosRecibidos){
      context.commit('updateUsuario',datosRecibidos);
    },
    acionTraerCursoDB(context){
      context.commit('traerCursoDB')
    }
  },
})
