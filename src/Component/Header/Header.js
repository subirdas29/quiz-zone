import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-around bg-slate-300 p-4'>
            <Link to='/'>
                <h2 className='text-2xl font-bold'>QuiZ Zone</h2>
            </Link>
           <div className='flex '>
           <NavLink to='/' className='ml-4 text-lg'>Home</NavLink>
            <NavLink to='/statistics' className='ml-4 text-lg'>Statistics</NavLink>
            <NavLink to='/blogs' className='ml-4 text-lg'>Blog</NavLink>
           </div>
        </nav>
    );
};

export default Header;