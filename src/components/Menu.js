import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Menu=()=>{
    const activeStyle={
        color: 'green',
        fontSize: '2rem'
    };
    return(
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home </NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>about </NavLink></li>
                <li><NavLink to="/about/react" activeStyle={activeStyle}>Introduce React </NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>post list</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;
