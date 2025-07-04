import React, {Component} from "react";
import Todo from "./Todo";
import {addTodo, fetchTodos} from "../actions";
import {connect} from "react-redux";
import AddTodoForm from "./form/addTodoForm";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {todos} = this.props.data;
    return (
      <section>
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
              return <Todo key={`todo-${index}`} todo={todo.task}/>;
            })
            : "No todos, yay!"}
        </ul>
        <AddTodoForm addTodo={addTodo} />
      </section>
      
    );
  }
}

const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchTodos,
    addTodo
  }
)(TodoList);