import React from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css'

const PageWrapper: React.FC = () => {
    return (
        <div className='page-content-wrapper'>
            <Outlet />
        </div>
    );
};

export default PageWrapper;