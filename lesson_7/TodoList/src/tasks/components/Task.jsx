import React from 'react';
import classnames from 'classnames';

const Task = ({ id, done, text, onChange, onDelete }) => {
    const listItemClasses = classnames('list-item', {'list-item_done' : done});
  return (
    <li className={listItemClasses}>
    <input type="checkbox" className="list-item__checkbox"
      defaultChecked={done}
      onChange={() => onChange(id)} 
    />
    <span className="list-item__text">{text}</span>
    <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  )
}
export default Task;