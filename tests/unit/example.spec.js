import { shallowMount } from "@vue/test-utils";
import TodoAdd from "@/components/TodoAdd.vue";

describe("Pruebas en TodoAdd.vue", () => {
  it("prueba 1", () => {
    const wrapper = shallowMount(TodoAdd);
    const datosTodoAdd = TodoAdd.data();
    expect(datosTodoAdd.agregar).toEqual("");
    expect(wrapper.vm._isMounted).toBe(true);
    let entradaInput = wrapper.find("input");
    expect(entradaInput.element.placeholder).toBe("Agregar un curso");
    /* console.log(wrapper.vm._isMounted);*/
  });

  it("Prueba en Boton...", () => {
    const wrapper = shallowMount(TodoAdd);
    expect(wrapper.find("button").text()).toBe("Agregar");
    let aux = wrapper.vm.$data.agregar;
    aux = "Curso 1";
    console.log(aux);
    //wrapper.find("button").trigger("click");
    expect(wrapper.vm.$data.agregar).toBe("");
    wrapper.vm.agregarCurso = jest.fn();
    wrapper.vm.agregarCurso();
    expect(wrapper.vm.agregarCurso.mock.calls.length).toBe(1);
    console.log(wrapper.vm.agregarCurso.mock.calls.length);
  });
});
