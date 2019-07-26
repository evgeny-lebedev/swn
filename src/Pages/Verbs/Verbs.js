import React from "react";
import styles from './Verbs.module.css'
import {Redirect} from "react-router";
import {routes} from "../../Routes/Routes";

function Verbs() {

    return (
        <div className={styles.verbs}>
            <Redirect to={routes.verbs.routes.all.path}/>
        </div>
    )
}

export default Verbs;