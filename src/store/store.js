import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: JSON.parse(localStorage.getItem("usuario")) || {},
    cursosLista: [
      {
        id: 0,
        name: 'VueJS',
        description: 'The Progressive JavaScript Framework',
        image: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
        completed: false
      },
      {
        id: 1,
        name: 'ReactJS',
        description: 'Una biblioteca de JavaScript para construir interfaces de usuario',
        image: 'https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png',
        completed: false
      }
    ]
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
    almacenandoCurso(state, recibidoCursoActions){
      let idNuevo = Math.floor(Math.random()*10);

      while (idNuevo > -1){
        let busqueda = state.cursosLista.find(result => result.id == idNuevo);
        if (busqueda == undefined){
          break;
        } else if (busqueda.id == idNuevo){
          idNuevo++;
        }
      }

      let curso_temporal = {
        id: idNuevo,
        name: recibidoCursoActions.name,
        image: recibidoCursoActions.image,
        description: recibidoCursoActions.description,
        completed: recibidoCursoActions.completed
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
      context.commit('almacenandoCurso',recibidoCurso);
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
    }
  },
})
