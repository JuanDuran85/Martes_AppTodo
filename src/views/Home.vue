<template>
  <div>
    <TodoAdd />
    <TodoLista/>
  </div>
</template>

<script>
import TodoAdd from '@/components/TodoAdd.vue';
import TodoLista from '@/components/TodoLista.vue';

export default {
  name: 'Home',
  components: {
    TodoAdd,
    TodoLista
  }
}
</script>
