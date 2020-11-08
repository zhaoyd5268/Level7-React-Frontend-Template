import React from "react";
import {properties} from '../../properties';
import classes from './Header.module.css';

const header = () => (
    <div className={classes.Logo}>
        <img src="https://www.jointheleague.org/wp-content/uploads/2017/03/JTL_Logo_Nav.png"
             alt="The League of Amazing Programmers footer"/>
        <h2>
            <a className={classes.Link}
               href="https://www.jointheleague.org/"
               rel="noopener noreferrer"
               target="_blank">
                The LEAGUE of Amazing Programmers
            </a>
        </h2>
        <h3>{properties.courseName}</h3>
    </div>
);

export default header;