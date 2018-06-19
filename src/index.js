import uuidv4 from 'uuid/v4'
import { renderTodos } from './views'
import { loadTodos, createTodo, saveTodos } from './todos'
import { setFilters } from './filters'

loadTodos()

renderTodos()

// listen for the new search
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchtext: e.target.value
    })
    renderTodos ()
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos ()
})

// Set up form submission handler
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const content = e.target.elements.text.value.trim()
    if(content.length > 0) {
        createTodo(content)
        saveTodos()
        renderTodos()
        e.target.elements.text.value = ''
    } else {
        return
    }
})

window.addEventListener('storage', (e) => {
    if ( e.key === 'text') {
        loadTodos()
        renderTodos()
    }
})

// Bonus: Add a watcher for local storage