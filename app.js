const { createApp } = Vue;

createApp({

  ///////////////////////////////DATA////////////////////////
  data() {
    return {
      todos: [
        {
          text: 'Fare i compiti',
          done: false
        },

        {
          text: 'Fare la spesa',
          done: true
        },

        {
          text: 'Fare il bucato',
          done: false
        },

        {
          text: 'Stendere i vestiti',
          done: true
        },
      ],

      taskValue: '',

      error: false,
     
    }
  },

///////////////////////////////////////METHODS///////////////////////////////
  methods: {
    removeTask(task) {
      this.todos.splice(task, 1);
    },

    addTask() {

      if(this.taskValue.length < 5){
        this.error = true;
      } else {
        const todo = {
          text: this.taskValue,
          done: false,
        }
        this.todos.unshift(todo);
        this.error = false;
      }
      
      this.taskValue = '';
    },

    invertDone(index){
      if(this.todos[index].done === true) {
        this.todos[index].done = false;
      } else {
        this.todos[index].done= true;
      }
    }
  },
/////////////////////////////////////////MOUNTED///////////////////////////////
  mounted() {
   
  }
}).mount('#app')