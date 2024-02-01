import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  
  return (
    <div className={styles['search-bar']}>
      <select className={styles.selector} name="search-options" onChange={props.handleChange}>
        <option value="quotes">Quote</option>
        <option value="authors">Author</option>
      </select>
      <input type="text" placeholder={`Search for ${props.quoteOrAuthor}...`} className={styles['input-search']} onChange={props.handleInputChange}></input>
      <button className={styles.btn} onClick={props.handleClick}>Search</button>
    </div>
  )
}

export default SearchBar