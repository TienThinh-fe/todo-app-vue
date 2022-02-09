<template>
  <div>
    <the-input></the-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TheInput from "./components/Input/TheInput.vue";
import TodoList from "./components/Todo/TodoList.vue";

export default {
  components: { TheInput, TodoList },
};
</script>

<style>
@import "./reset.css";
@import "./App.css";
</style>