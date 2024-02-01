import { useState, useEffect } from 'react';
import Card from './components/Card'
import SearchBar from './components/SearchBar'

import './App.css'

export default function App() {

  const [quoteOrAuthor, setQuoteOrAuthor] = useState('quotes');
  const [value, setValue] = useState();
  const [searchData, setSearchData] = useState();

  const handleChange = (e) => {
    const { target } = e;
    setQuoteOrAuthor(target.options[target.selectedIndex].value)
  }

  const handleClick = async () => {
    const res = await fetch(`https://api.quotable.io/search/${quoteOrAuthor}?query=${value}`);
    const data = await res.json();
    setSearchData(data);
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }
  
  return (
    <main>
      Still learning... Lots of bugs 🪳
      <br />
      Original: <a href="https://quotes.nawagaest.repl.co/">https://quotes.nawagaest.repl.co/</a>
      <SearchBar quoteOrAuthor={quoteOrAuthor} value={value} handleChange={handleChange} handleInputChange={handleInputChange} handleClick={handleClick} />
      <Card quoteOrAuthor={quoteOrAuthor} searchData={searchData} />
    </main>
  )
}
