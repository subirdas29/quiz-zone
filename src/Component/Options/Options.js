import React from 'react';

const Options = ({option,handleAnsOfQtn}) => {


    return (
        <div  className='mb-4 '>
            <input onClick={()=>handleAnsOfQtn(option)} className='mx-2 ' type="radio" name='option' />{option}
        </div>
    );
};

export default Options;