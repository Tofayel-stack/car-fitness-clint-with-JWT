import React, { useContext, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/ContextApi';

const CheckOut = () => {

    const orderProduct =useLoaderData()
    const {product,cost,_id} = orderProduct;
    const {user} = useContext(AuthContext)



    const [btn,setBtn] = useState(false)

    const btnActive = (e) => {
        if(e.target.value.length === 11){
            setBtn(true)
        }
        else{setBtn(false)}
    }




    const handleSubmit = event => {
        event.preventDefault() 

        const name = `${event.target.firstName.value} ${event.target.LastName.value}`;
        const address = event.target.address.value;
        const message = event.target.message.value;
        const phoneNo = event.target.phoneNo.value;


        const order ={
            name,
            address,
            message,
            email : user.email,
            phoneNo,
            product : product,
            productID: _id,
            price: cost ,

        }

    
        fetch('https://car-fitness-server.vercel.app/userOrder',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(order)
        })

        // alert("order confirmed !!")
        event.target.reset()
       

    
    }



    return (
        <div>
        <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2  className="mb-4 font-bold md:text-xl text-heading ">Check Out now
                    </h2>

                    <h2>You are going to Order : {product} </h2>
                    <h3>Price is : {cost}</h3>
                    <form onSubmit={handleSubmit} className="justify-center w-full mx-auto">
                        <div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="lasttName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="LastName" type="text" placeholder="Last Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input name="email" type="text" defaultValue={user?.email} placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="phoneNO"
                                        className="block mb-3 text-sm font-semibold text-gray-500">phoneNO</label>
                                    <input onChange={btnActive} name="phoneNo" type="text" placeholder="017xxxxxxxx"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                                </div>
                            </div>



                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="address" cols="20" rows="4" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="relative pt-3 xl:pt-6">
                                <textarea name="message"
                                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    rows="4" placeholder="Notes for delivery"> 
                                    </textarea>
                            </div>
                            <div className="mt-4">
                              
                             
                              <button  className=" btn bg-green-900 text-white hover:bg-blue-900" disabled={!btn}><label htmlFor="my-modal">Confirmed</label></button>

                              
                            </div>
                        </div>
                    </form>
                </div>
           
            </div>
        </div>


            {/* modal */}
                     
            <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Thanq for Your Order</h3>
                            <p className="py-4">Dont worry we are working on it , u will get it very soon . </p>
                            <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Yay!</label>
                            </div>
                        </div>
                        </div>          
                   

        </div>
    );
};

export default CheckOut;