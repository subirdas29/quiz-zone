import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quizes = ({allQuiz}) => {
const {question,options,correctAnswer} =allQuiz;


 const handleAnsOfQtn = options=>
 {
  if(options === correctAnswer)
  {
    toast("Congratulation,This is Correct Answer!");
  }
  else
  {
    toast("Sorry, This is Wrong Answer!");
  }
 }

 const handleCorrectAns = correctAnswer=>
 {
  if(correctAnswer)
  {
     toast(`${correctAnswer}`);
    
  }
}
console.log(handleCorrectAns)

  return (
        <div className='m-20 border border-sky-400 p-10 flex justify-between'>
            <div>
            <h2 className='text-2xl font-bold mb-7'>{question}</h2>
            {
                options.map(option => <Options handleAnsOfQtn={handleAnsOfQtn} option={option}></Options>)
            }
            </div>
            <div>
              <FontAwesomeIcon onClick={()=>handleCorrectAns(correctAnswer)} icon={faEye} />
            </div>

            <ToastContainer />
        </div>
    );
};

export default Quizes;