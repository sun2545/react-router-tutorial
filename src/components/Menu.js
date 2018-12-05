import React from 'react';
import {Link} from 'react-router-dom';

const Menu=()=>{
    return(
        <div>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/about">about </Link></li>
                <li><Link to="/about/react">Introduce React </Link></li>
            </ul>
        </div>
    );
};

export default Menu;