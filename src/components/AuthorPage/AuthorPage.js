import React, { useState } from 'react';

const AuthorPage = () => {


  const [productInfo,setProductInfo] = useState({})

  function handleSubmitForm(event){
    event.preventDefault()

    fetch('http://localhost:5000/service',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(productInfo)
    })

      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          alert('you added a new product in DB')
        }
      })

      event.target.reset()
  }

  function handleOnBlurInput(e){
    const value = e.target.value;
    const field = e.target.name;
    const newProductInfo = {...productInfo}
    newProductInfo[field] = value;

    setProductInfo(newProductInfo)
    // console.log(field,':', value);
    // console.log(productInfo);

  }




  
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">

    <div>
      <span className='text-2xl text-red-600 font-bold '>This is an Author page</span>
      <h1 className='text-5xl font-bold w-3/4 mt-16 mb-4'>Added your products</h1>
    </div>
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmitForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service/Product name</span>
          </label>
          <input onBlur={handleOnBlurInput} type="text" name='product' placeholder="write here" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">cost/price</span>
          </label>
          <input onBlur={handleOnBlurInput} type="text" name='cost' placeholder="cost" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Quantity</span>
          </label>
          <input onBlur={handleOnBlurInput} type="text" name='quantity' placeholder="Quantity" className="input input-bordered" />
        </div>
        <div className="mt-6">
          <button  className="btn bg-orange-600 text-white">push to DB</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AuthorPage;