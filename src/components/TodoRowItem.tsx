import React from "react";

export const TodoRowItem: React.FC<{
  order: number, 
  desc: string, 
  assigned: string, 
  deleteTodo: Function
}> = (props) => {
  return (
    <tr onClick={() => props.deleteTodo(props.order)}>
      <th scope='row'>{props.order}</th>
      <td>{props.desc}</td>
      <td>{props.assigned}</td>
    </tr>
  );
};