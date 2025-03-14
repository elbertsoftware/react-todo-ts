import React from 'react';

import { TodoModel } from '../models/TodoModel';
import { TodoRowItem } from './TodoRowItem';

export const TodoTable: React.FC<{
  todos: TodoModel[], 
  deleteTodo: Function
}> = (props) => {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Description</th>
          <th scope='col'>Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(todo => (
          <TodoRowItem 
            key={todo.order} // serving React unique row identifier
            order={todo.order} desc={todo.desc} assigned={todo.assigned}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};