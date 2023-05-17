import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextApi/ContextApi';
import { MdDeleteSweep } from 'react-icons/md';


const MyOrder = () => {
    const {user,userLogOut} = useContext(AuthContext)
    
   
    const [orderData,setOrderData] = useState()
    useEffect(()=>{
        fetch(`http://localhost:5000/userOrder?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                // logout here
                return userLogOut()

            }
            return res.json()
        })
        .then(data => 
                setOrderData(data)
            )

        .catch(error => console.error(error))
    },[user?.email,userLogOut])





    const handleDeleteMethod = (id) =>{
        const permission = window.confirm("are u sure to DLT")

        if(permission){
            fetch(`http://localhost:5000/userOrder/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(error=> console.error(error))

        
        }
        

    }
    return (
        <div>

            <h1 className='my-4 text-2xl font-bold text-gray-900 md:text-5xl lg:text-6xl'>This is your <span className='text-yellow-600'>Order</span> .</h1>
            <h1 className='font-bold'>Your Total order : {orderData?.length} </h1>

            <div className='flex flex-wrap'>
            {
                orderData?.map(singleData =>
                     (
                        <div key={singleData._id} className="card w-96 bg-gradient-to-r from-slate-800 via-yellow-700 to-red-900 text-white m-10">
                            <div className="card-body flex flex-row justify-between items-center">
                                <div>
                                    <h2 className="card-title">Product : {singleData.product}</h2>
                                    <p>Price : {singleData.price}</p>
                                </div>
                                <div>
                                    <button onClick={()=>handleDeleteMethod(singleData._id)} className='text-2xl btn text-white'><MdDeleteSweep/></button>
                                </div>
                            </div>
                        </div>
                     ))
            } 
            </div>


        </div>
    );
};

export default MyOrder;