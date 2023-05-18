import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../../ContextApi/ContextApi';




const SignIn = () => {

  const {googleSingUpHandle} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
    }

    const handleGoogleLogin = ()=>{
      const fromRoute = location.state?.from?.pathname || '/' ;


      googleSingUpHandle()
      .then((result) => {
        const user = result.user;
        console.log(user)

        const currentUser = {email: user.email}
            // get a jwt token in the time of user login . when firebase say user is authentic . thn we want a jwt for this user

              fetch('https://car-fitness-server.vercel.app/jwt',{
                method:'POST',
                headers:{
                  'content-type':'application/json'
                },
                body: JSON.stringify(currentUser)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                // local storage is the easiest but not the best place for store the token . more safe is https coockies .
                localStorage.setItem('token' , data.token)
              })


      })
  




      .catch((error) => console.error(error));


      navigate(fromRoute,{replace:true})
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Do you feel worry about car/bike service , <br /> we are here to solve our problem , you need to just contact us . feel releave </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered" />
          
        </div>

        <span>don't have account ? <Link to='/register' className='text-blue-400'>register</Link></span>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <span className='text-center text-indigo-500'>or</span>
          <button onClick={handleGoogleLogin} className="btn btn-info bg-white text-gray-600 hover:rounded-sm " > <BsGoogle/> &nbsp; Sign In With Google</button>

          <marquee className='text-red-500 font-bold text-xs'>For now only google logIn is available</marquee> 
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;