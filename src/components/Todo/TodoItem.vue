<template>
  <div>
    <base-dialog
      :show="wannaEdit"
      title="Wanna change your plan?"
      @close="handleCloseDialog"
    >
      <div class="input-field">
        <label for="todo">Pick another name</label>
        <input type="text" id="todo" v-model="name" />
      </div>
      <div class="priority-field">
        <label for="priority">Choose priority for job</label>
        <select name="priority" id="priority" v-model="priority">
          <option value="high" selected="selected">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <base-button @click="editTask">Edit</base-button>
    </base-dialog>

    <li>
      <div class="todo-name">Name: {{ todoName }}</div>
      <div class="todo-priority">Priority: {{ todoPriority }}</div>
      <base-button @click="removeTask">Remove</base-button>
      <base-button @click="turnTheEditOn">Edit</base-button>
    </li>
  </div>
</template>

<script>
export default {
  props: ["todoName", "todoPriority", "id"],
  data() {
    return {
      wannaEdit: false,
      name: this.todoName,
      priority: "high",
    };
  },
  methods: {
    removeTask() {
      this.$store.commit({
        type: "removeTodo",
        removeId: this.id,
      });
    },
    editTask() {
      console.log("EDIT TASK");
      this.$store.commit({
        type: "editTodo",
        editId: this.id,
        editName: this.name,
        editPriority: this.priority,
      });
      this.handleCloseDialog();
    },
    turnTheEditOn() {
      this.wannaEdit = true;
    },
    handleCloseDialog() {
      this.wannaEdit = false;
    },
  },
};
</script>