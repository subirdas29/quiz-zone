import React from 'react';
import Options from '../Options/Options';

const Quizes = ({allQuiz}) => {
const {question,options} =allQuiz;

let questions = question.split('</p>');



  return (
        <div className='my-6'>
            <h2 className='text-2xl font-bold'>{questions}</h2>
            {
                options.map(option => <Options option={option}></Options>)
            }

        </div>
    );
};

export default Quizes;