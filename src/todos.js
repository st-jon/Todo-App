import uuidv4 from 'uuid/v4'


let todos = []

const loadTodos = () => {
    const todoJSON = localStorage.getItem('text')
    try {
        todos = todoJSON ? JSON.parse(todoJSON) : []
    } catch (e){
        return []
    }
}

const saveTodos = ()  => {
   localStorage.setItem('text', JSON.stringify(todos))
    
}

const getTodos = () => todos

const createTodo = (todoText) => {
    const id = uuidv4()

    todos.push({
        id: id,
        text: todoText,
        completed: false
    })
    saveTodos()
}

const removeTodo = (id) => {
    const taskIndex = todos.findIndex((todo) => todo.id === id)
    if (taskIndex > -1) {
        todos.splice(taskIndex, 1)
        saveTodos()
    }
}

const toggleTodo = (id) => {
    const task = todos.find((todo) => todo.id === id)
    if (task) {
        task.completed = !task.completed
        saveTodos()
    }
     
}

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }