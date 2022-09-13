document.addEventListener("DOMContentLoaded", () => {
  const eleTodo = document.querySelector("#todo-string");
  const eleBtnAdd = document.querySelector("#btn-add");
  const eleTodoList = document.querySelector("#todo-list");

  const temp = localStorage.getItem("todoArr");
  let todoArr = temp ? JSON.parse(temp) : [];

  todoArr.push({ a: 1, b: 2, c: 3 });
});
