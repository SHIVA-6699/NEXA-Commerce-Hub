import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listFeedbacks } from "../graphql/queries";

const Allfeedback = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      // Fetch todos using GraphQL query
      const todoData = await API.graphql(graphqlOperation(listFeedbacks));

      // Extract todos from the response
      const todosList = todoData.data.listFeedbacks.items;

      setTodos(todosList);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Feedbacks</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>File/Image</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id==null ? "Empty" :todo.id}</td>
              <td>{todo.name==null?"Empty":todo.name}</td>
              <td>{todo.email}</td>
              <td>{todo.message}</td>
              <td>{todo.file ==null ? "No File Added":todo.file}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allfeedback;
