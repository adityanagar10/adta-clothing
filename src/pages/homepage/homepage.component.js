import React from 'react';
import { withRouter } from 'react-router-dom';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.components';

function Homepage(){
    return(
        <div className="homepage">
            <Directory />
        </div>


    )    
}


export default Homepage;