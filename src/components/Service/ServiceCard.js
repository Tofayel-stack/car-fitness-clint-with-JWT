import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAutoDelete } from 'react-icons/md';

const ServiceCard = ({product}) => {
    

    const [dispalyProduct,setDispalyProduct] = useState(product)

// console.log(dispalyProduct);

    function handleDeleteProduct(id){

        const confirm = window.confirm('are u sure about Deleting')

        if(confirm){
            fetch((`http://localhost:5000/service/${id}`),{
                method:'DELETE',
                headers:{'content-type':"application/json"}
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

            //jonkar vai code .. but this is not working for object filter .. it should array filter ..

            //const dispalyProduct =  product.filter(p  => p._id !== id)
           // setDispalyProduct(dispalyProduct) 
        }
  
    }

    // console.log(product);
    return (
        <div>
            <div className="my-4 mx-3 card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://placeimg.com/400/225/arch" alt="bg" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{dispalyProduct?.product}</h2>
                <p>Product price : {dispalyProduct?.cost}</p>
                <p>quantity : {dispalyProduct?.quantity}</p>
                <div className="card-actions justify-end">
                <Link to={`/checkout/${dispalyProduct?._id}`}> <button className="btn">Buy now</button> </Link>
                <Link to={`/update/${dispalyProduct?._id}`}><button className="btn btn-primary">update</button></Link>
                <button onClick={()=>handleDeleteProduct(dispalyProduct?._id)} className="btn text-2xl bg-red-800"><MdAutoDelete/></button>
                </div>
            </div>
            </div>


        </div>



    );
};

export default ServiceCard;