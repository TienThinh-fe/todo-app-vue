<template>
  <div>
    <h2 v-if="!hasTask">You do not have any tasks! Free time?</h2>
    <ul v-else>
      <todo-item
        v-for="todo in todoList"
        :key="todo.id"
        :id="todo.id"
        :todoName="todo.todoName"
        :todoPriority="todo.todoPriority"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  computed: {
    todoList() {
      return this.$store.getters.getAllTodo;
    },
    hasTask() {
      return this.todoList.length > 0;
    },
  },
};
</script>