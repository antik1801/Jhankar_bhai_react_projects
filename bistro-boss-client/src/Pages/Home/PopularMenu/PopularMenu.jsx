import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    return (
        <section>
            <SectionTitle heading="From Our Menu" subheading="Check it Out"></SectionTitle>
        </section>
    );
};

export default PopularMenu;