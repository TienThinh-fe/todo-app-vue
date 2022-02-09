import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import TodoModule from "./Todo/index.todo";

const dataState = createPersistedState({
  paths: ["todo.todoList"],
});

const store = createStore({
  modules: {
    todo: TodoModule,
  },
  plugins: [dataState],
});

export default store;
