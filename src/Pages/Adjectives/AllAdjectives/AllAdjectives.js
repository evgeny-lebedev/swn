import React, {useState} from "react";
import styles from './AllAdjectives.module.css'
import data from '../../../Data/Nouns'
import ListOfWords from "../../../Components/ListOfWords/ListOfWords";
import {words} from "../../../Words/Words";
import Headline from "../../../Components/Headline/Headline";
import Test from "../../../Components/Test/Test";
import ContentType from "../../../Components/ContentType/ContentType";
import classes from "./AccountVerification.module.css";


function AllAdjectives() {

  const maleNouns = data.filter(noun => noun.gender === 1);
  const femaleNouns = data.filter(noun => noun.gender === 2);
  const neuterNouns = data.filter(noun => noun.gender === 3);
  const [type, setType] = useState(1);

  return (
    <div className={styles.allAdjectives}>
      {/*<Headline headline={`${words.all} ${words.adjectives}`}/>*/}
      {/*<ContentType type={type} setType={setType}/>*/}

      {/*{*/}
      {/*  type === 1 ? (*/}
      {/*      <div className={styles.listsContainer}>*/}
      {/*        <ListOfWords headline={words.male} words={maleNouns}/>*/}
      {/*        <ListOfWords headline={words.female} words={femaleNouns}/>*/}
      {/*        <ListOfWords headline={words.neuter} words={neuterNouns}/>*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*    : type === 2 && (*/}
      {/*    <Test words={data}/>*/}
      {/*  )*/}

      {/*}*/}

      <AccountVerification/>
    </div>
  )
}


export const AccountVerification = React.memo(() => {

  return (
    <div className={classes.accountVerification}>
      <section>
        <FileUploader/>
      </section>
    </div>
  )
});

const maxFileSize = 5000000;
const minFileSize = 500000;
const extensionAllowedRegexp = /(image\/)+(png|jpg|jpeg)$/;

function FileUploader() {

  const fileReader = new FileReader();
  const [files, setFiles] = useState([]);
  const [encodedFiles, setEncodedFiles] = useState([]);
  fileReader.onloadend = () => {
    setEncodedFiles([...encodedFiles, fileReader.result]);
  };
  const handleAddFileClick = (file) => {
    setFiles([...files, file]);
    fileReader.readAsDataURL(file);
  };
  const handleUploadClick = () => {
    console.log(encodedFiles);
  };
  const handleCancelClick = () => {
    setFiles([]);
    setEncodedFiles([]);
  };
  const handleRemoveClick = (index) => () => {
    const filesCopy = [...files];
    filesCopy.splice(index, 1);
    setFiles(filesCopy);
  };
  const checkForRepeat = file => files.find(element => element.name === file.name);

  return (
    <div className={classes.fileLoader}>
      <ul>

        {
          files.map(({name, size}, index) => (
              <File
                key={name + index}
                index={index + 1}
                name={name}
                size={size}
                handleRemoveClick={handleRemoveClick(index)}
              />
            )
          )
        }

        <AddFile checkForRepeat={checkForRepeat} numberOfFiles={files.length} addFile={handleAddFileClick}/>
      </ul>
      <div className={classes.buttonsWrapper}>
        <button className={classes.uploadButton} onClick={handleUploadClick} disabled={files.length === 0}>
          upload
        </button>

        {
          files.length > 0 && (
            <button className={classes.cancelButton} onClick={handleCancelClick}>
              Cancel
            </button>
          )
        }

      </div>
    </div>
  )
}

function AddFile({checkForRepeat, numberOfFiles, addFile}) {

  const [error, setError] = useState(null);

  const handleInputChange = event => {
    const file = Array.from(event.target.files)[0];
    if (!file) {
      return;
    }
    if (checkForRepeat(file)) {
      return;
    }
    const extensionAllowed = extensionAllowedRegexp.test(file.type);
    if (!extensionAllowed) {
      setError('wrong file extension');
      return;
    }
    if (file.size > maxFileSize) {
      setError('too big');
      return;
    } else if (file.size < minFileSize) {
      setError('too small');
      return;
    }

    setError(null);
    addFile(file);
  };

  return (
    <li className={classes.addFile}>
      <div className={classes.addFileWrapper}>
        <div className={classes.index}>
          {numberOfFiles + 1}
        </div>
        <div className={classes.fileInfo}/>
        <label>
          <input type="file" onChange={handleInputChange} disabled={numberOfFiles >= 5}/>
          <div className={classes.addFileButton}>
            add file
          </div>
        </label>
      </div>

      {
        error && (
          <div className={classes.addFileError}>
            {error}
          </div>
        )
      }

    </li>
  )

}

function File({index, name, size, handleRemoveClick}) {

  const fileSize = Math.round(size / 10000) / 100;
  const normalizedFileSize = `${fileSize === 0 ? '0.01' : fileSize} MB`;

  return (
    <li className={classes.file}>
      <div className={classes.index}>
        {index}
      </div>
      <div className={classes.fileInfo}>
        <span className={classes.fileName}>
          {name}
        </span>
        <span className={classes.fileSize}>
          {normalizedFileSize}
        </span>
      </div>
      <button className={classes.removeFileButton} onClick={handleRemoveClick}>
        Remove
      </button>
    </li>
  )
}


export default AllAdjectives;