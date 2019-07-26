import React from 'react';
import styles from './App.module.css'
import Main from './Components/Main/Main'
import Header from "./Components/Header/Header";

function App() {

    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
