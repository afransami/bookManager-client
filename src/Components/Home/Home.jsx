import React from 'react';
import { Outlet } from 'react-router-dom';
import AllBooks from '../AllBooks/AllBooks';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div>        
            <AllBooks></AllBooks>
                                 
        </div>
    );
};

export default Home;