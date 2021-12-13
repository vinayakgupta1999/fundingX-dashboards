import React from 'react';
import Menu from './Menu';
import Main from './Main';
import './Home.css'


const Home = () => {
    return (
        <div className="all-home">
            <div className="left-side"><Menu /></div>
            <div className="right-side"><Main  /></div>
            
        </div>
    )
}

export default Home
