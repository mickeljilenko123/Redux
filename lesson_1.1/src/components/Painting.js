import React from 'react';
import paintings from '../paintings.json'

const Painting = ({ url, title, price, author, quantity, price }) => {
    return ( <
        div >
        <
        img src = { url }
        alt = { title }
        width = "480" / >
        <
        h2 > { title } < /h2> <
        p > Автор: < a href = { author } > < /a></p >
        <
        p > Цена: { price }
        кредитов < /p> <
        p > Доступность: { quantity > 10 ? "заканчивается" : 'есть в наличии' } < /p> <
        button type = "button" > Добавить в корзину < /button> <
        /div>
    )
}
export default Painting;