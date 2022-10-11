import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Quizes = ({allQuiz}) => {
const {question,options} =allQuiz;



  return (
        <div className='m-20 border border-sky-400 p-10 flex justify-between'>
            <div>
            <h2 className='text-2xl font-bold mb-7'>{question}</h2>
            {
                options.map(option => <Options option={option}></Options>)
            }
            </div>
            <div>
              <FontAwesomeIcon  icon={faEye} />
            </div>

        </div>
    );
};

export default Quizes;