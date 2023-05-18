import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {


    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('https://car-fitness-server.vercel.app/service')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])



    // console.log(products);

    return (
        <div className='flex container m-auto justify-evenly flex-wrap'>
           {
            products?.map(product => <ServiceCard
            key={product._id}
            product={product}
        
            ></ServiceCard>)
           }
        </div>
    );
};

export default Service;