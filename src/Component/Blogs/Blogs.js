import React from 'react';

const Blogs = () => {
    return (
        <div className='m-16'>
            <h2 className='text-4xl font-bold mb-4'>1.What is the purpose of react-router? </h2>
            <p className='mb-14 text-2xl font-medium'>
               <span className='underline'> Ans:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>



            <h2 className='text-4xl font-bold mb-4'>2.How does Context Api works? </h2>
            <p className='mb-14 font-medium text-2xl'>
            <span className='underline'> Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>



            <h2 className='text-4xl font-bold mb-4'>3.What is useRef Hook? </h2>
            <p className='mb-14 font-medium text-2xl'>
            <span className='underline'> Ans:</span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
    );
};

export default Blogs;