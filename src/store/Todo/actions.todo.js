const actions = {
  addTodoAction(context, payload) {
    context.commit("addTodo", payload.newTask);
  },
};

export default actions;
