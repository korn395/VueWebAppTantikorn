<template>
    <div class="app">
      <h1 class="head">Vue.js To-Do List</h1>
      <input v-model="newTask" placeholder="Add a task" @keyup.enter="addTask" />
      <button @click="addTask">Add Task</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.completed" />
          <span :class="{ 'completed-task': task.completed }">{{ task.text }}</span>
          <button @click="removeTask(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>  
  
  <script>
export default {
  name: "Home",
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ text: this.newTask.trim(), completed: false });
        this.newTask = "";
      } else {
        alert("Task cannot be empty!");
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #2c3e50, #4ca1af);
  color: #ecf0f1;
  font-family: 'Roboto', sans-serif;
}

input {
  padding: 12px 15px;
  border: 2px solid #34495e;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  font-size: 1.1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #2c3e50;
  color: #ecf0f1;
  outline: none;
}

input::placeholder {
  color: #95a5a6;
  font-style: italic;
}

button {
  padding: 12px 25px;
  margin: 15px 0;
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: #ecf0f1;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

button:hover {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  transform: translateY(-2px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  background-color: #34495e;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #2c3e50;
  color: #ecf0f1;
}

li:last-child {
  border-bottom: none;
}

.completed-task {
  text-decoration: line-through;
  color: #7f8c8d;
  font-style: italic;
}

li input[type="checkbox"] {
  margin-right: 15px;
  transform: scale(1.2);
  accent-color: #4ca1af;
}

li button {
  background: transparent;
  border: none;
  color: #1abc9c;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

li button:hover {
  color: #16a085;
}

@media (max-width: 600px) {
  input {
    width: 100%;
  }

  button {
    width: 100%;
    font-size: 1rem;
  }
}
</style>
