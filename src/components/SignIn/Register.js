import React from 'react';

const Register = () => {
    return (
                            
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Do you feel worry about car/bike service , <br /> we are here to solve our problem , you need to just contact us . feel releave </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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

                            <div className="form-control mt-6">
                            <button className="btn btn-primary">submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                        
    );
};

export default Register;