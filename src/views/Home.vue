<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import firebase, {firestore} from "../firebase";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      firestore.collection("todos").doc(id).delete();
    },
    addTodo(newTodo) {
      firestore.collection("todos").add(newTodo);
      console.log(newTodo);
    }
  },
  created() {
    firestore.collection('todos').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(docChange => {
        const todo = docChange.doc.data();
        todo.id = docChange.doc.id;

        if (docChange.type === "added") {
          this.todos = [...this.todos, todo];
        } else if (docChange.type === "removed") {
          this.todos = this.todos.filter(t => t.id !== todo.id)
        } else if (docChange.type === "modified") {
          this.todos = this.todos.map(t => t.id === todo.id ? todo : t);
        }
      });
    });
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>