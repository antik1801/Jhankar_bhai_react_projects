import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const BuyNow = () => {
    const data = useLoaderData();
    console.log(data);
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const postcode = form.postcode.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const product_id=parseInt(Math.random()*1000000000000);
        const info = {
            name,price,postcode,address,phone,product_id
        }
        // POST request to "/order"
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(info)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                toast.success('inserted data')
            }
        })
    }
    return (
        <div className='w-50 mx-auto my-5 '>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' className='form-control mb-3' name='name' defaultValue="antik"/>
            <input type="text" placeholder='price to bdt' className='form-control mb-3' name='price' defaultValue={25}/>
            <input type="text" placeholder='postcode' className='form-control mb-3' name='postcode' defaultValue="3102"/>
            <input type="text" placeholder='address' className='form-control mb-3' name='address' defaultValue="21/2 Bolevia Road, Khulna"/>
            <input type="text" placeholder='phone' className='form-control mb-3' name='phone' defaultValue="01869694519"/>
            <input type="submit" className='btn  btn-danger' value="Pay now"/>
            </form>
        </div>
    );
};

export default BuyNow;