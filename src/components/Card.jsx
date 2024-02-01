import { useState, useEffect } from 'react';
import Quote from './Quote';
import GenerateBtn from './GenerateBtn';

import styles from './Card.module.css'

const Card = (props) => {

  const { searchData, quoteOrAuthor } = props;

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch('https://api.quotable.io/random')
      const quoteData = await res.json();
      setData(quoteData); 
    } catch(err) {
      setData(new Error(err));
    }
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className={styles.card}>
      <Quote searchData={searchData} quoteOrAuthor={quoteOrAuthor} data={data}></Quote>
      <GenerateBtn onClick={getData} />
    </div>
  )
}

export default Card;