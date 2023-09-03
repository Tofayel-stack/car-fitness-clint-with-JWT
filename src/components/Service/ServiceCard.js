import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAutoDelete } from 'react-icons/md';

const ServiceCard = ({product}) => {
    

    function handleDeleteProduct(id){

        const confirm = window.confirm('are u sure about Deleting')

        if(confirm){
            fetch((`https://car-fitness-server.vercel.app/service/${id}`),{
                method:'DELETE',
                headers:{'content-type':"application/json"}
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

      
        }
  
    }

    // console.log(product);
    return (
        <div>
            <div className="my-4 mx-3 card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i0.wp.com/www.thestartupfounder.com/wp-content/uploads/2022/02/hcp8ee-ap2s.jpg?resize=1024%2C813&ssl=1" alt="bg" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{product?.product}</h2>
                <p>Product price : {product?.cost}</p>
                <p>quantity : {product?.quantity}</p>
                <div className="card-actions justify-end">
                <Link to={`/checkout/${product?._id}`}> <button className="btn">Buy now</button> </Link>
                <Link to={`/update/${product?._id}`}><button className="btn btn-primary">update</button></Link>
                <button onClick={()=>handleDeleteProduct(product?._id)} className="btn text-2xl bg-red-800"><MdAutoDelete/></button>
                </div>
            </div>
            </div>


        </div>



    );
};

export default ServiceCard;