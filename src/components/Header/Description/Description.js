import React from "react";
import {properties} from '../../../properties';
import classes from './Description.module.css';

const Description = () => (
    <div className={classes.Description}>
        <p>
            <strong>Project Description:</strong><br />{properties.description}
        </p>
    </div>
);

export default Description;