import mutations from "./mutations.todo";
import actions from "./actions.todo";
import getters from "./getters.todo";

const TodoModule = {
  state: {
    todoList: [],
  },
  mutations,
  actions,
  getters,
};

export default TodoModule;
