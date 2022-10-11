import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import Logo from '../../images/quiz-2.png'

const Home = () => {
    const quizes = useLoaderData();
    

    return (
        <div>
            <div className='flex justify-center '>
            <img className='h-60' src={Logo} alt="" />
            <h2 className='flex items-center text-5xl font-bold'>Let's check your Quiz Knowledge</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-20 gap-6 mt-0'>
            {
                quizes.data.map(quiz => <Topics key={quiz.id}
                    quiz={quiz}></Topics>)
            }
            </div>

        </div>
    );
};

export default Home;