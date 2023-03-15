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
            console.log(index)
            console.log(this.todoList[index])
            this.todoList = this.todoList.slice(index, 1) 
            console.log(this.todoList)   
        }
    }
}).mount('#app')