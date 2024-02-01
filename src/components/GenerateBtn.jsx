import React from 'react';
import styles from './GenerateBtn.module.css'

const GenerateBtn = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>Generate Random</button>
  )
}

export default GenerateBtn;