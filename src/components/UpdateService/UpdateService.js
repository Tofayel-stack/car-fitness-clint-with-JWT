import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateService = () => {

    const takedProduct = useLoaderData()

    const [latestUpdate,setLatestUpdate] = useState(takedProduct)
    //  console.log(latestUpdate);


    function onSubmitHandle(event){
        event.preventDefault()

        fetch(`http://localhost:5000/service/${takedProduct._id}`,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(latestUpdate)
        })
        .then(res=> res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        
        alert("update done")
        event.target.reset()
    }

    function onblurHandle(event){

        const value =  event.target.value;
        const field = event.target.name;
        const newValue = {...latestUpdate}
        newValue[field] = value;

        // console.log(newValue);

        setLatestUpdate(newValue)
    }



    return (
       
             <div>
                   <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">

                        <div>
                        <span className='text-2xl text-red-600 font-bold '>This is an Author page</span>
                        <h1 className='text-5xl font-bold w-3/4 mt-16 mb-4'>Update your products</h1>
                        </div>
                    
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={onSubmitHandle} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Previous Product name <b className='text-green-500'>{takedProduct.product}</b></span>
                            </label>
                            <input onBlur={onblurHandle} type="text" name='product' placeholder="write here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Previous price <b className='text-green-500'>{takedProduct.cost}</b></span>
                            </label>
                            <input onBlur={onblurHandle} type="text" name='cost' placeholder="cost" className="input input-bordered" />
                            </div>
                        
                            <div className="mt-6">
                            <button  className="btn bg-orange-600 text-white">update</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
      
    );
};

export default UpdateService;