import { useState, useEffect } from 'react';

const Quote = (props) => {

  const [data, setData] = useState();

  useEffect(() => {
    setData(props.quoteOrAuthor === 'quotes' ? { content: props.searchData?.results[0]?.content, author: props.searchData?.results[0]?.author } : { name: props.searchData?.results[0]?.name, bio: props.searchData?.results[0]?.bio })
  }, [props.searchData]);
  
  return (
    <>
      <h1>{(props.quoteOrAuthor === 'quotes' ? data?.content : data?.bio) || props.data?.content}</h1>
      <p>{(props.quoteOrAuthor === 'quotes' ? data?.author : data?.name) || props.data?.author}</p>  
    </>
  )
}

export default Quote;