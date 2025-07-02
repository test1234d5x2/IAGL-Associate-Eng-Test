const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository)
const todoController = require('./controller/todo')(todoService)

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', todoController.getTodos)
  server.post('/api/todo', todoController.addTodo)

  /**
  URL Endpoint: POST /api/todo

  Input: {
   "task": "Some API"
  }

  Returns: New list of todos 
  {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;