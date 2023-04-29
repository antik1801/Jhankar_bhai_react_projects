import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import EditorsInsideLeft from '../EditorsInside/EditorsInsideLeft';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(req=> req.json())
        .then(data=> setCategories(data))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h4>All Category</h4>
            <div>
            {
                categories.map(category=><Button className="w-100 mb-2 p-3" variant="outline-secondary" key={category.id}><Link to={`/category/${category.id}`} className='text-dark text-decoration-none'>{category.name}</Link></Button>)
            }
            </div>
            <EditorsInsideLeft />
        </div>
    );
};

export default LeftNav;