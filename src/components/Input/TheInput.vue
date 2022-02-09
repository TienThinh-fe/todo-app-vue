<template>
  <div class="input-wrapper">
    <div class="input-field">
      <label for="todo">Enter a task</label>
      <input
        type="text"
        id="todo"
        v-model="todoName"
        @focus="this.inputIsValid = true"
      />
    </div>
    <p v-if="!inputIsValid">Oopssss! Something went wrong with your input</p>
    <div class="priority-field">
      <label for="priority">Choose priority for job</label>
      <select name="priority" id="priority" v-model="todoPriority">
        <option value="high" selected="selected">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
    <base-button @click="addTask">Add</base-button>
  </div>
</template>

<script>
import { getId } from "../../utils/index";

export default {
  data() {
    return {
      todoName: "",
      todoPriority: "high",
      inputIsValid: true,
    };
  },
  methods: {
    validInput() {
      this.inputIsValid = true;

      if (this.todoName === "") {
        this.inputIsValid = false;
        return;
      }
    },
    addTask() {
      this.validInput();

      if (this.inputIsValid === false) {
        return;
      }

      const newTask = {
        id: getId(),
        todoName: this.todoName,
        todoPriority: this.todoPriority,
      };
      this.$store.dispatch({
        type: "addTodoAction",
        newTask,
      });
    },
  },
};
</script>

<style scoped>
</style>