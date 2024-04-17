
// MenuContext.js
import React, { createContext, useState } from 'react';
import { menu_list } from '../dataItem';


function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[`p${ index ++ }`] = r(item);
    });
    return images;
}

const images = importAll(require.context('../Assets/', false, /\.(png)$/));

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuData] = useState(menu_list.map((item, index) => ({
        ...item,
        image: images[`p${ index ++ }`]
    })));

    return (
        <MenuContext.Provider value={{ menuData }}>
            {children}
        </MenuContext.Provider>
    );
};


