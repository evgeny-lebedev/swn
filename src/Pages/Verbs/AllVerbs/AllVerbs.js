import React, {useState} from "react";
import styles from './AllVerbs.module.css'
import ListOfWords from "../../../Components/ListOfWords/ListOfWords";
import data from '../../../Data/Verbs'
import {words} from "../../../Words/Words";
import Headline from "../../../Components/Headline/Headline";
import ContentType from "../../../Components/ContentType/ContentType";
import Test from "../../../Components/Test/Test";

function AllVerbs() {

    const [type, setType] = useState(1);

    return (
        <div className={styles.allVerbs}>
            <Headline headline={`${words.all} ${words.verbs}`}/>
            <ContentType type={type} setType={setType}/>

            {
                type === 1 ? (
                        <ListOfWords words={data}/>
                    )
                    : type === 2 && (
                    <Test words={data}/>
                )

            }

        </div>
    )
}

export default AllVerbs;