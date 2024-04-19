import React from 'react';
import './food.css'

const Menu = ({ category, menu }) => {

    const categoryData = (cat) =>{
        menu(cat)
    }

    return (
        <ul>
            {
            category.map((item) => (
                <li className="mx-1" key={item.id}>
                    <button onClick={() => categoryData(item.category)} className='btn btn-success'>{item.category}</button>
                </li>
            ))
            }
        </ul>
    );
};

export default Menu;
