const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = inputValue => (
    `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
     </li>`
)

const resetFormAddTodo = () => event.target.reset()

const hideTodo = todo => {
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
}

const showTodo = todo => {
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()
    
    if (inputValue.length) {
        todosContainer.innerHTML += addTodo(inputValue)
        resetFormAddTodo()
    } 
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    
    if (clickedElement.dataset.trash) 
        document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`)
            .remove()
})

inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const lis = Array.from(todosContainer.children)

    lis.filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            hideTodo(todo)
        })

    lis.filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            showTodo(todo)
        })
})