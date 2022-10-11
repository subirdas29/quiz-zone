import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Topics = ({quiz}) => {
    const { name, logo,id } = quiz;
   
    const navigate = useNavigate();
    const handleNavigate = ()=>{

        navigate(`/quiz/${id}`)
    
    }
    
    return (
        
            <div className='m-0 border border-sky-500 p-5'>
                <div>
                    <img className='w-60' src={logo} alt="" />
                </div>
                <div className='flex justify-between '>
                <p className='flex items-center'>{name}</p>
                
                <Link to={`/quiz/${id}`}> <button className='w-32 bg-green-500 py-2 mt-4 rounded font-bold text-white'>
                 Start quiz </button></Link>
                
                </div>
                </div>
        
        
        
    );
};

export default Topics;