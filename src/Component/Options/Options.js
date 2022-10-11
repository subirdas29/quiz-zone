import React from 'react';

const Options = ({option}) => {
    return (
        <div className='mb-4'>
            <input type="radio" value="option" />{option}
        </div>
    );
};

export default Options;