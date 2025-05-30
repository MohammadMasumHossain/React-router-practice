import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <SideBar>
                </SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;