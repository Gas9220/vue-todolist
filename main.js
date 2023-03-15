const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {
                    text: "Andare in pizzeria",
                    isCompleted: false
                },
                {
                    text: "Fare la spesa",
                    isCompleted: true
                },
                {
                    text: "Seguire la lezione",
                    isCompleted: false
                },
            ],
        }
    },
    methods: {
        removeTodo(index) {
            this.todoList.splice(index, 1) 
        }
    }
}).mount('#app')