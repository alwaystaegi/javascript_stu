document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#todo");
  const todolist = document.querySelector("#todo-list");
  const addButton = document.querySelector("#add-button");

  let keyCount = 0;

  const addTodo = () => {
    if (input.value.trim() === "") {
      alert("할 일을 입력해주세요");
      return;
    }

    const item = document.createElement("div");
    const checkbox = document.createElement("input");

    const text = document.createElement("span");
    const button = document.createElement("button");

    const key = keyCount;
    keyCount += 1;

    item.setAttribute("data-key", key);
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todolist.appendChild(item);

    checkbox.type = "checkbox";

    checkbox.addEventListener("change", (event) => {
      item.style.textDecoration = event.target.checked ? "line-through" : "";
    });
    text.textContent = input.value;

    button.textContent = "제거하기";
    button.addEventListener("click", () => {
      removeTodo(key);
    });
    input.value = "";
  };
  const removeTodo = (key) => {
    const item = document.querySelector(`[data-key="${key}"]`);
    todolist.removeChild(item);
  };
  addButton.addEventListener("click", addTodo);
  input.addEventListener("keyup", (event) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      addTodo();
    }
  });
});
