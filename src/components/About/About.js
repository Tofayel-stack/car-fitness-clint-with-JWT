import React from 'react';
import img01 from '../../Assets/About/about01.jpg'
import img02 from '../../Assets/About/about02.jpg'

const About = () => {
    return (
        <div className='lg:flex my-40 container m-auto'>
            <div className='lg:w-1/2 relative' >
                <img className='object-contain w-3/4 z-20 rounded-lg img1' src={img01} alt="" />
                <img className='object-contain absolute bottom-0 right-0 w-2/5 rounded-lg right-10 outline outline-white outline-8  z-30 img2' src={img02} alt="" />
            </div>

            <div className='lg:w-1/2 lg:m-0 mx-2'>
              <span className='text-2xl text-red-600 font-bold ' >
                About Us
              </span>

              <h2 className='lg:text-5xl font-bold w-3/4 mt-16 mb-4'>We are qualified & of experience in this field</h2>
                
                <p className='leading-loose text-zinc-400'>
                When it comes to keeping your car running smoothly and efficiently, regular maintenance and repairs are a must. While there are a variety of options available for servicing your vehicle, choosing a professional car service can offer numerous benefits. <br /> <br />

                Overall, using a professional car service can provide numerous benefits in terms of expertise, convenience, and reliability. Whether you need routine maintenance or more complex repairs, a car service can help ensure that your vehicle is running at its best.
                </p>

                <button className="btn btn-active bg-orange-600 rounded text-white mt-16">Get in touch</button>
                
            </div>
        </div>
    );
};

export default About;