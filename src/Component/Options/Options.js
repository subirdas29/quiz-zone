import React from 'react';

const Options = ({option}) => {
    return (
        <div className='mb-4 '>
            <input className='mx-2 ' type="radio" name='option' />{option}
        </div>
    );
};

export default Options;