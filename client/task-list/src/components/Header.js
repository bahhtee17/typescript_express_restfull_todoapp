import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={classes.container}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
