import React from 'react';
import './Banner.css'

const BannerCompo = ({props}) => {
    const {img,pre,nxt,id} = props;
    return (
      <>
          <div id={`slide${id}`} className="carousel-item relative w-full imageGradientOverlay">
        <img alt='pic' src={img} className="w-full " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${pre}`} className="btn btn-circle">❮</a> 
          <a href={`#slide${nxt}`} className="btn btn-circle">❯</a>
        </div>

                <div className='absolute inset-y-40 left-20'>
                    <h1 className='lg:text-6xl font-bold text-white'>Affordable Car <br /> Service Is <br />  Always Guaranteed!</h1>
                    <p className='text-lg text-white my-12'>
                    When it comes to keeping your car running safely and efficiently,<br /> getting it serviced regularly is one of the best things you can do.
                    </p>
                        <button className="btn rounded mr-4">Contact Us</button>
                        <button className="btn btn-outline btn-error rounded">Latest Project</button>
                </div>

        </div> 

        
      </>
    )
};

export default BannerCompo;