import React from 'react';
import styles from './Main.module.css'
import {Route, Switch} from "react-router-dom";
import {routes} from "../../Routes/Routes";

function Main() {

    return (
        <div className={styles.main}>
            <Switch>
                <Route exact path={routes.home.path} component={routes.home.component}/>
                <Route exact path={routes.nouns.path} component={routes.nouns.component}/>
                <Route exact path={routes.nouns.routes.learn.path} component={routes.nouns.routes.learn.component}/>
                <Route exact path={routes.nouns.routes.repeat.path} component={routes.nouns.routes.repeat.component}/>
                <Route exact path={routes.nouns.routes.all.path} component={routes.nouns.routes.all.component}/>
                <Route exact path={routes.verbs.path} component={routes.verbs.component}/>
                <Route exact path={routes.verbs.routes.learn.path} component={routes.verbs.routes.learn.component}/>
                <Route exact path={routes.verbs.routes.repeat.path} component={routes.verbs.routes.repeat.component}/>
                <Route exact path={routes.verbs.routes.all.path} component={routes.verbs.routes.all.component}/>
                <Route exact path={routes.noteFound.path} component={routes.noteFound.component}/>
            </Switch>
        </div>
    );
}

export default Main;