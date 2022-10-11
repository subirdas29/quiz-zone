import React from 'react';
import Options from '../Options/Options';

const Quizes = ({allQuiz}) => {
const {question,options} =allQuiz;

let questions = question.split('</p>');



  return (
        <div className='m-20 border border-sky-400 p-10 '>
            <h2 className='text-2xl font-bold mb-7'>{questions}</h2>
            {
                options.map(option => <Options option={option}></Options>)
            }

        </div>
    );
};

export default Quizes;