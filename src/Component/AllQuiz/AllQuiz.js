import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const AllQuiz = () => {

    const allQuizes = useLoaderData();
    console.log(allQuizes);

    // const [ans,setAns] =useState(false)

    // const handleAnsOfQtn = data =>
    // {
    //     const correctAns = ans.find(cans => cans.correctAnswer === data.options)
    //     if(correctAns)
    //     {
    //         alert('this is correct')
    //     }
    //     else
    //     {
    //         alert('this is not correct')
    //     }
    //     setAns(!=ans))
    // }
   

    return (
        <div className='text-left pl-4'>
        {
            allQuizes.data.questions.map( allQuiz => <Quizes key={allQuiz.id} 
                allQuiz={allQuiz}></Quizes> )
        }
        </div>
    );
};

export default AllQuiz;