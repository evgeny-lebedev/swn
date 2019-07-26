import React from "react";
import styles from './Nouns.module.css'
import {Redirect} from "react-router";
import {routes} from "../../Routes/Routes";

function Nouns() {

    return (
        <div className={styles.nouns}>
            <Redirect to={routes.nouns.routes.all.path}/>
        </div>
    )
}

export default Nouns;