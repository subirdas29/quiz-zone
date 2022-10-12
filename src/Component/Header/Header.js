import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import Logo from '../../images/quiz-1.png';

const Header = () => {
    return (
        <nav className='flex justify-around bg-slate-200 p-4 w-full'>
            
            <Link className='flex' to='/'>
            <img className='h-8 mr-3' src={Logo} alt="" />
                <h2 className='text-2xl font-bold'>QuiZ Zone</h2>
            </Link>
           <div className='flex '>
           <NavLink to='/' className='ml-2 text-lg'>Home</NavLink>
            <NavLink to='/statistics' className='ml-2 text-lg'>Statistics</NavLink>
            <NavLink to='/blogs' className='ml-2 text-lg'>Blog</NavLink>
            <NavLink to='/about' className='ml-2 text-lg'>About</NavLink>
           </div>
        </nav>
    );
};

export default Header;