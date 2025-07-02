import axios from "axios";
import { ADD_TODO, FETCH_TODOS } from "./types";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}


export function addTodo(task) {
  return function(dispatch) {
    return axios.post("http://localhost:9091/api/todo", task).then(({ data }) => {
      if (data.error) {
        console.error("Error adding todo:", data.error)
        return
      }

      dispatch(addTodoSuccess())
      dispatch(fetchTodos())
    }).catch(error => {
      console.error("Error adding todo:", error);
    });
  };
}


function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}

function addTodoSuccess() {
  return {
    type: ADD_TODO,
    payload: ""
  };
}