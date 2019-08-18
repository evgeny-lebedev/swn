import React from "react";
import styles from './Adjectives.module.css'
import {Redirect} from "react-router";
import {routes} from "../../Routes/Routes";

function Adjectives() {

    return (
        <div className={styles.adjectives}>
            <Redirect to={routes.adjectives.routes.all.path}/>
        </div>
    )
}

export default Adjectives;