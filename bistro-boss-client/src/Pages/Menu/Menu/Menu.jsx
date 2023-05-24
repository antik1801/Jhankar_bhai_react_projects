import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuBG from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
    
    return (
        <div>
                <title>Bistro - Menu</title>
                <Cover img={menuBG} title={"Our menu"}></Cover>
        </div>
    );
};

export default Menu;