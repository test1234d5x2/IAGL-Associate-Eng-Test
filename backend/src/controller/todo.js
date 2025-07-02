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

      await todoService.addTodo(task)
      res.status(201).json({ message: 'Todo added successfully.' });
    }
  }
}

module.exports = todoController;