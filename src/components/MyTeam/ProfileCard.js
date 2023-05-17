import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import './ProfileCardStyle.css'

const ProfileCard = ({teamData}) => {
    const {photo,name,designation,descrip} = teamData
    // console.log(teamData);
  return (
    <div>
      <div className="card w-96 mx-2 my-2 bg-base-100 shadow-lg">
        <figure className="px-6 pt-10">
          <img 
            src={photo}
            alt="pic"
            className="rounded-xl imgSize"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{designation}</p>
          <div className="card-actions">
            <a href="#a" className="mx-1 bg-orange-500 p-2 rounded-full"><BsFacebook/></a>
            <a href="#a" className="mx-1 bg-orange-500 p-2 rounded-full"><FiInstagram/> </a>
            <a href="#a" className="mx-1 bg-orange-500 p-2 rounded-full"><BsTwitter/> </a>
                
             
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
