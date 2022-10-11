import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const AllQuiz = () => {

    const allQuizes = useLoaderData();
   




    return (
        <div>
        {
            allQuizes.data.questions.map( allQuiz => <Quizes key={allQuiz.id} 
                allQuiz={allQuiz}></Quizes> )
        }
        </div>
    );
};

export default AllQuiz;