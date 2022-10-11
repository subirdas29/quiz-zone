import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import Logo from '../../images/quiz.png'

const Home = () => {
    const quizes = useLoaderData();
    
    
  
    return (
        <div>
            {/* <img src=} alt="" /> */}
            <h2 className='my-4'>Let's check your Quiz Knowledge</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-20 gap-6'>
            {
                quizes.data.map(quiz => <Topics key={quiz.id}
                    quiz={quiz}></Topics>)
            }
            </div>

        </div>
    );
};

export default Home;