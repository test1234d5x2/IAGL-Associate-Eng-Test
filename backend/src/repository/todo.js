
let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    },
  ]
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: (task) => {
    todoList.todos.push({ task });
    return Promise.resolve(todoList);
  }
};