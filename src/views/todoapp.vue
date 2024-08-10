<template>
  <div class="container">
    <h1>To Do List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add a new to-do" />
      <button type="submit">Add</button> 
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "", // For storing the new to-do text
      todos: [], // For storing all to-do items
    };
  },
  mounted() {
    this.fetchTodos(); 
  },
  methods: {
    addTodo() {
      // Check if the new to-do text is not empty
      if (this.newTodo.trim() !== "") {
        const todoItem = {
          text: this.newTodo.trim(), // Create a new to-do item
        };

        // Send POST request to add the new to-do
        fetch("http://localhost:3001/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(todoItem),
        })
          .then(() => {
            this.fetchTodos(); // Fetch the updated list of to-dos after adding a new one
          })
          .catch((err) => console.log(err.message)); 

        this.newTodo = ""; // Clear the input field
      }
    },
    removeTodo(id) {
      fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          // Update the local todos array by filtering the removed to-do
          this.todos = this.todos.filter((todo) => todo.id !== id);
        })
        .catch((err) => console.log(err.message)); 
    },
    fetchTodos() {
      fetch("http://localhost:3001/todos")
        .then((response) => response.json())
        .then((data) => {
          this.todos = data; // Update the local todos array with the data from the server
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>




