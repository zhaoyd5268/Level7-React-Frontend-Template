import React from "react";
import {properties} from '../../../properties';
import classes from './CreatedBy.module.css';

const CreatedBy = () => (
    <div className={classes.CreatedBy}>
        <p>
            <strong>Created By:</strong>< br/>{properties.createdBy}
            <br/>
            <br/>
            <a className={classes.Link}
               href={properties.backendSwaggerUrl}
               rel="noopener noreferrer"
               target="_blank">
                View Spring Boot API documentation
            </a>
            <br/>
            <br/>
            <a className={classes.Link}
               href={properties.repositoryUrl}
               rel="noopener noreferrer"
               target="_blank">
                View Repository on GitHub
            </a>
        </p>
    </div>
);

export default CreatedBy;