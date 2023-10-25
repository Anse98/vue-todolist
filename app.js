const { createApp } = Vue;

  createApp({
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
        ]
      }
    },

    methods: {
      removeTask(task){
        this.todos.splice(task,1);
      }
    },

    mounted() {
      
    }
  }).mount('#app')