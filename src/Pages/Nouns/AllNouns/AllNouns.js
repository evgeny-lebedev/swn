import React, {useState} from "react";
import styles from './AllNouns.module.css'
import data from '../../../Data/Nouns'
import ListOfWords from "../../../Components/ListOfWords/ListOfWords";
import {words} from "../../../Words/Words";
import Headline from "../../../Components/Headline/Headline";
import Test from "../../../Components/Test/Test";
import ContentType from "../../../Components/ContentType/ContentType";

function AllNouns() {


  const maleNouns = data.filter(noun => noun.gender === 1);
  const femaleNouns = data.filter(noun => noun.gender === 2);
  const neuterNouns = data.filter(noun => noun.gender === 3);
  const [type, setType] = useState(1);

  return (
    <div className={styles.allNouns}>
      <Headline headline={`${words.all} ${words.nouns}`}/>
      <ContentType type={type} setType={setType}/>

      {
        type === 1 ? (
            <div className={styles.listsContainer}>
              <ListOfWords headline={words.male} words={maleNouns}/>
              <ListOfWords headline={words.female} words={femaleNouns}/>
              <ListOfWords headline={words.neuter} words={neuterNouns}/>
            </div>
          )
          : type === 2 && (
          <Test words={data}/>
        )

      }

    </div>
  )
}

export default AllNouns;