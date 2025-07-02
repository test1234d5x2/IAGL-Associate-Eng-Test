
const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [{
        "task": "This is a todo example"
      }]
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });

  it('should add a new todo', async () => {
    const task = "Task 2";
    const expected = {
      todos: [{
        "task": "This is a todo example"
      }, {
        "task": task
      }]
    };
    const actual = await repository.addTodo(task);
    expect(actual).toEqual(expected);
  });
});