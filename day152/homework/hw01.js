class TodoApp {
    constructor() {
        this.input = document.getElementById('task-input')
        this.button = document.getElementById('add-btn')
        this.list = document.getElementById('task-list')

        
        this.button.addEventListener('click', () => {
            this.add()
        })
    }

    add() {
        const text = this.input.value
        if (text === ""){
            return
        } 

        
        const li = document.createElement('li')
        const span = document.createElement('span')
        const editBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')

        span.innerText = text
        editBtn.innerText = "Edit"
        deleteBtn.innerText = "Delete"

        deleteBtn.addEventListener('click', () => {
            li.remove()
        });

        
        editBtn.addEventListener('click', () => {
            this.editTask(span, editBtn)
        });

       
        li.appendChild(span)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        this.list.appendChild(li)

        
        this.input.value = ""
    }

    editTask(span, button) {
        if (button.innerText === "Edit") {
            const currentText = span.innerText
            const inputField = document.createElement('input')
            inputField.type = "text"
            inputField.value = currentText

            span.innerText = ""
            span.appendChild(inputField)
            button.innerText = "Save"
        } else {
            
            const inputField = span.firstChild
            if (inputField.value !== "") {
                span.innerText = inputField.value
                button.innerText = "Edit"
            }
        }
    }
}


const myTodo = new TodoApp()