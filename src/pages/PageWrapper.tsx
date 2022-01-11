import React from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css'

const PageWrapper = () => {
    return (
        <div className='page-content-wrapper'>
            <Outlet />
        </div>
    );
};

export default PageWrapper;