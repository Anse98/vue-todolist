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

      taskValue:'',
     
    }
  },

///////////////////////////////////////METHODS///////////////////////////////
  methods: {
    removeTask(task) {
      this.todos.splice(task, 1);
    },

    addTask() {
      const todo = {
        text: this.taskValue,
        done: false,
      }
      this.todos.unshift(todo); 
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