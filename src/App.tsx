import React, {useState} from 'react';

import './App.css';

import { TodoModel } from './models/TodoModel';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {
  const [todos, setTodos] = useState([] as TodoModel[]);
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const addTodo = (desc: string, name: string) => {
    // make sure id is unique
    const id: number = todos.length === 0 ? 1 : todos[todos.length - 1].order + 1;
    const todo: TodoModel = new TodoModel(id, desc, name);

    // https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
    setTodos(prevTodos => [...prevTodos, todo]);
    setShowNewTodoForm(!showNewTodoForm);
  }

  const deleteTodo = (row: number) => {
    const filteredTodos = todos.filter(value => value.order !== row);
    setTodos(filteredTodos);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          
          {!showNewTodoForm 
            ? <button className='btn btn-primary' type='button' onClick={() => setShowNewTodoForm(!showNewTodoForm)}>Add New Todo</button>
            : <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
};
