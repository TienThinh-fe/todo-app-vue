const mutations = {
  addTodo(state, payload) {
    state.todoList.push(payload);
  },
  removeTodo(state, payload) {
    state.todoList = state.todoList.filter(
      (todo) => todo.id !== payload.removeId
    );
  },
  editTodo(state, payload) {
    const todoIndex = state.todoList.findIndex(
      (todo) => todo.id === payload.editId
    );
    state.todoList[todoIndex].todoName = payload.editName;
    state.todoList[todoIndex].todoPriority = payload.editPriority;
  },
};

export default mutations;
