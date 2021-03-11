import React from 'react';
import Paint from './Paint';

const PaintList = ({ items }) => {
 return (
     <ul>
         {items.map(item => (
             <li key={item.id}><Paint 
               url = {item.url}
               title = {item.title}
               price = {item.price}
               quantity = {item.quantity}
               authorUrl = {item.author.url}
               authorData = {item.author.tag}
             /></li>
         ))}
     </ul>
 )
}
export default PaintList;