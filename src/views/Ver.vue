<template>
  <div>
      <todo-lista></todo-lista>
  </div>
</template>

<script>
import TodoLista from '../components/TodoLista.vue';

export default {
    name: 'Ver',
    components: {
        TodoLista
    }
}
</script>