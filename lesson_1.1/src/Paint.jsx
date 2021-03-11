import React from 'react';


const Paint = ({ url, title, price, quantity, authorUrl, authorData  }) => {
  return (
    <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={authorUrl}>{authorData}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
    <button type="button">Добавить в корзину</button>
  </div>
  )
}
export default Paint;