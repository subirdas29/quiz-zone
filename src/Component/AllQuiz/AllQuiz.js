
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const AllQuiz = () => {

    const allQuizes = useLoaderData();
    
   

    return (
        <div className='text-left pl-4'>
        {
            allQuizes.data.questions.map( allQuiz => <Quizes key={allQuiz.id} 
                allQuiz={allQuiz}>
                </Quizes> )
        }
        </div>
    );
};

export default AllQuiz;