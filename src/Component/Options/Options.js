import React from 'react';

const Options = ({option}) => {
    return (
        <div>
            <input type="radio" value="option" />{option}
        </div>
    );
};

export default Options;