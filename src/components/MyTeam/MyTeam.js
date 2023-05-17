import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

const MyTeam = () => {

    const [teams,setTeams] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/teamData')
        .then(res => res.json())
        .then(data =>setTeams(data))
        .catch(error => console.error(error))
    },[])
    

    // console.log(teams);

    return (
        <>
        <div className='text-center container m-auto'>
            <span className='text-2xl text-red-600 font-bold '>Team</span>
            <h1 className='text-5xl font-bold my-12'>Meet my team</h1>
            <p className='text-stone-500'>it's important to consider what makes your product or service stand out from the competition. What unique features or benefits does it have? <br />
            How does it solve problems or meet the needs of your customers better than other options on the market?</p>
        </div>
             <div className='lg:flex justify-around my-32 container m-auto'>
        {
            teams.map(team=><ProfileCard
            key={team.id}
            teamData= {team}
            ></ProfileCard>
            )
        }
       </div>
        </>
    );
};

export default MyTeam;