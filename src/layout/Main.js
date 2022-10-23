import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import bg from '../../src/assets/img/bg2.png'


const Main = () => {
    return (
        <div

            className=" w-full bg-no-repeat bg-cover bg-left bg-fixed h-screen "
            style={{ backgroundImage: `url(${bg})` }}


        >
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;