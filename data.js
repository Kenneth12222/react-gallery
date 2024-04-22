import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('path/to/db.json');
            const data = await response.json();
            setMenuData(data); // Assuming the structure of db.json matches menu_list
        } catch (error) {
            console.error('Error fetching menu data:', error);
        }
    };

    const createMenuItem = async (newItem) => {
        try {
            // Assuming db.json contains an array of menu items
            const newData = [...menuData, newItem];
            await saveData(newData);
            setMenuData(newData);
        } catch (error) {
            console.error('Error creating menu item:', error);
        }
    };

    const updateMenuItem = async (updatedItem) => {
        try {
            const newData = menuData.map(item => (item.id === updatedItem.id ? updatedItem : item));
            await saveData(newData);
            setMenuData(newData);
        } catch (error) {
            console.error('Error updating menu item:', error);
        }
    };

    const deleteMenuItem = async (itemId) => {
        try {
            const newData = menuData.filter(item => item.id !== itemId);
            await saveData(newData);
            setMenuData(newData);
        } catch (error) {
            console.error('Error deleting menu item:', error);
        }
    };

    const saveData = async (data) => {
        try {
            // Save the updated data to db.json
            await fetch('path/to/db.json', {
                method: 'PUT', // Assuming you're using PUT to update the entire data
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <MenuContext.Provider value={{ menuData, createMenuItem, updateMenuItem, deleteMenuItem }}>
            {children}
        </MenuContext.Provider>
    );
};
