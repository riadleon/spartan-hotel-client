import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import bg from '../../src/assets/img/bg2.png'
import './Main.css'


const Main = () => {
    return (
        <div className='body'>

            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;