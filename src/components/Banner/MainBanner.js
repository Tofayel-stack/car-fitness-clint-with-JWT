import React from 'react';
import BannerCompo from './BannerCompo';
import pic01 from '../../Assets/sliderImg/01.jpg';
import pic02 from '../../Assets/sliderImg/02.jpg';
import pic03 from '../../Assets/sliderImg/03.jpg';
import pic04 from '../../Assets/sliderImg/04.jpg';

const sliderData = [
    {
        id:'1',
        img:pic01,
        nxt:'2',
        pre:'4'
    },
    {
        id:'2',
        img:pic02,
        nxt:'3',
        pre:'1'
    },
    {
        id:'3',
        img:pic03,
        nxt:'4',
        pre:'2'
    },
    {
        id:'4',
        img:pic04,
        nxt:'1',
        pre:'3'
    }
]

const MainBanner = () => {
    return (
        <div className="carousel lg:w-3/4 m-auto">
            {
                sliderData.map(slide => <BannerCompo
                key={slide.id}
                props={slide}
                >
                </BannerCompo>
                
            )}
        </div>
    );
};

export default MainBanner;