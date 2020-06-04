import Vue from "vue";
import Vuex from "vuex";
import store from "../../src/store/store";

describe("pruebas al store vuex", () => {
  beforeAll(() => {
    Vue.use(Vuex);
    store = new Vuex.Store(store);
  });
});

describe("primera actions", () => {
  it("prueba en agregarCursoVuex", () => {
    store.dispatch("agregarCursoVuex", "curso nuevo");
    store.dispatch("agregarCursoVuex", "curso2 nuevo");
    store.dispatch("agregarCursoVuex", "curso3 nuevo");
    expect(store.state.cursosLista.length).toBe(5);
  });
});

describe("prueba en getters", () => {
  it("enviadoCursos", () => {
    let llamandoGetters = store.getters.enviadoCursos;
    expect(llamandoGetters.length).toBe(5);
  });
});
