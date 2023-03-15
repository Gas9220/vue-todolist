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
            newToDoText: ''
        }
    },
    methods: {
        removeTodo(index) {
            this.todoList.splice(index, 1) 
        },
        addNewTodo() {
            if (this.newToDoText.trim() !== '') {
                const newTodo = {
                    text: this.newToDoText,
                    isCompleted: false
                }

                this.todoList.push(newTodo)

                this.newToDoText = ''
            }  
        },
         toggleTodo(todo) {
            return todo.isCompleted ? todo.isCompleted = false : todo.isCompleted = true;
        }
    }
}).mount('#app')