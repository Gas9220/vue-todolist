const { createApp } = Vue

createApp({
    data() {
        return {
            todoLists: [
                todoList = {
                    name: "Default",
                    elements:
                        [
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
                            }
                        ]
                }
            ],
            newToDoText: '',
            currentTodoList: 0,
            newListName: ''
        }
    },
    methods: {
        removeTodo(index) {
            this.todoLists[this.currentTodoList].elements.splice(index, 1)
        },
        addNewTodo() {
            if (this.newToDoText.trim() !== '') {
                const newTodo = {
                    text: this.newToDoText,
                    isCompleted: false
                }

                this.todoLists[this.currentTodoList].elements.push(newTodo)

                this.newToDoText = ''
            }
        },
        toggleTodo(todo) {
            return todo.isCompleted ? todo.isCompleted = false : todo.isCompleted = true;
        },
        createNewList() {
            const newList = {
                name: this.newListName,
                elements:
                    []
            }

            this.todoLists.push(newList)

            this.newListName = ''
        },
        changeList(index) {
            this.currentTodoList = index
        },
        isListSelected(list) {
            if (this.todoLists[this.currentTodoList] === list) {
                return "selected-list"
            }
        }
    }
}).mount('#app')