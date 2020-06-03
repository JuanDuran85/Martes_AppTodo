import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cursosLista: [
      {
        id: 0,
        name: 'VueJS',
        completed: false
      },
      {
        id: 1,
        name: 'ReactJS',
        completed: false
      }
    ]
  },
  getters: {
    enviadoCursos(state){
      return state.cursosLista;
    }
  },
  mutations: {
    almacenandoCurso(state, recibidoCursoActions){
      let idNuevo = Math.floor(Math.random()*10);
      console.log(idNuevo)

      while (idNuevo > -1){
        let busqueda = state.cursosLista.find(result => result.id == idNuevo);
        console.log(busqueda)
        if (busqueda == undefined){
          break;
        } else if (busqueda.id == idNuevo){
          idNuevo++;
        }
      }

      let curso_temporal = {
        id: idNuevo,
        name: recibidoCursoActions,
        completed: false
      }
      state.cursosLista.unshift(curso_temporal);
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
    }
  },
  actions: {
    agregarCursoVuex(context,recibidoCurso){
      context.commit('almacenandoCurso',recibidoCurso);
    },
    eliminarCurso(context, id){
      context.commit('deleteCurso',id)
    },
    actualizar(context,id){
      context.commit('updateCurso',id);
    }
  },
})
