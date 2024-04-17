
import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

import Cards from './Cards';

const MenuComponent = () => {
    const { menuData } = useContext(MenuContext);

    return (
        <div className='container'>
            <h2>Menu</h2>
            <div className="image-gallery">
                {menuData.map((item, index) => (
                    <Cards key={index} menuName={item.menu_name} image={item.image} />
                ))}
                
            </div>
            <button className='load'>Load more</button>
        </div>
    );
};

export default MenuComponent;

