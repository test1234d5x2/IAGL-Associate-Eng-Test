const todoController = (todoService) => {
  return {
    getTodos: async (req, res) => {
      res.json( await todoService.getTodos())
    },
    addTodo: async (req, res) => {
      const { task } = req.body;
      if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task should be filled in.' });
      }

      res.json(todoService.addTodo(task))
    }
  }
}

module.exports = todoController;