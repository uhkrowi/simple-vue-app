<template>
  <div class="container">
    <div class="form">
      <div class="todo-input">
        <!-- Todo title field -->
        <input placeholder="Type new todo" v-model="newTitle" />
        <!-- Submit or update button -->
        <button @click="submitForm()">Submit</button>
      </div>
      <!-- Table of todo list -->
      <table>
        <thead>
          <tr>
            <td>
              <!-- Input for mutate all checked or all unchecked state -->
              <input type="checkbox" @change="_ => {}"/>
            </td>
            <td>No</td>
            <td>Title</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="index">
            <td><input type="checkbox" v-model="todo.checked"/></td>
            <td>{{ index + 1 }}</td>
            <td>{{ todo.title }}</td>
            <td>
              <div class="action-container">
                <!-- Edit button of todo object -->
                <span @click="editData(todo)">Edit</span>
                <div class="space"></div>
                <!-- Delete single button of todo object -->
                <span @click="deleteData(todo.id)">Delete</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div v-if="false" class="delete-bulk">
        <!-- Delete bulk button of checked todos -->
        <button @click="_ => {}">Delete bulk</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      api: 'https://fiber-todo.herokuapp.com/api/todos',
      newTitle: '',
      todos: [],
      formMode: 'create',
      idToUpdate: ''
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const result = await axios.get(this.api)
      this.todos = result.data.data.todos
      const url = '123'
      const a = await axios.get(url) 
    },
    createData() {
      const newTodo = {
        title: this.newTitle,
        completed: false
      }

      axios.post(this.api, newTodo)
      .then(_ => {
        this.fetchData()
      })
    },
    editData(todo) {
      this.formMode = 'update'
      this.idToUpdate = todo.id
      this.newTitle = todo.title
    },
    submitForm() {
      if(this.formMode === 'create') {
        this.createData()
      } else {
        this.updateData()
      }
    },
    async updateData() {
      await axios.put(this.api + '/' + this.idToUpdate, {title: this.newTitle})
      this.fetchData()
    },
    async deleteData(id) {
      await axios.delete(this.api + '/' + id)
      this.fetchData()
    }
  }
}
</script>

<style lang="sass" scoped>
*
  font-size: 13px

thead
  tr
    td 
      text-align: center;
      padding: 5px 20px;
      background: #eee;

.container
  display: flex
  justify-content: center

.action-container
  display: flex;
  justify-content: center;
  span
    color: blue;
    cursor: pointer;

.form, table
  width: 700px

.space
  width: 5px;

.todo-input
  display: flex;
  margin-bottom: 10px;

.todo-input
  input
    width: 80%;

.todo-input
  button
    width: 20%;

.delete-bulk
  display: flex;
  justify-content: center;
  margin-top: 10px;
</style>