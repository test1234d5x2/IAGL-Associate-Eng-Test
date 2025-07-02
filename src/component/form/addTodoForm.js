import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const AddTodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) {
            setError("Please enter a task.");
            return;
        }
        addTodo({ task: todo });
        setTodo("");
        setError("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="new-todo"
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default connect(
    null, {addTodo}
)(AddTodoForm);