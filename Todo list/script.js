const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

let state = {
    todos: [],
};

if (localStorage.getItem("todos")) {
    state.todos = JSON.parse(localStorage.getItem("todos"));
}

state.todos
    ? state.todos.forEach((todo) => {
          addTodo(todo);
      })
    : "";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
        todoEl.classList.add("completed");
    }
    todoEl.textContent = todoText;

    todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("completed");
        state.todos.find((todo) => todo.text === todoEl.textContent).completed =
            todoEl.classList.contains("completed");
        localStorage.setItem("todos", JSON.stringify(state.todos));
    });
    todoEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        state.todos.splice(
            state.todos.findIndex((todo) => todo.text === todoEl.textContent),
            1
        );
        todoEl.remove();
        localStorage.setItem("todos", JSON.stringify(state.todos));
    });

    todosUL.appendChild(todoEl);
    if (!todo) {
        let todoOBJ = {
            text: todoText,
            completed: todoEl.classList.contains("completed"),
        };
        state.todos.push(todoOBJ);
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }

    input.value = "";
}
