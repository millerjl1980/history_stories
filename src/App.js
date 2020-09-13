// https://youtu.be/IYCa1F-OWmk - React Pagination 

import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { Items } from './components/Items';
import { Pagination } from './components/Pagination';
import { TitleBar } from './components/TitleBar';

const ITEMS_URL = "https://justinmiller.dev/api_test/example.php";
const CORS_KEY = "https://cors-anywhere.herokuapp.com/"

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);


  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(CORS_KEY + ITEMS_URL);
      setItems(res.data.results);
      setLoading(false);
    }
    fetchItems();
  }, []);

  const totalItems = items.length;
  const collectionItem = items[0]

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (loading) {
    return <div className="App"><h2>Loading...</h2></div>;
  }

  return(
    <div className="App">
      <TitleBar 
        collectionItem={ collectionItem }
        totalItems={ totalItems }
      />
      <Items items={currentItems} loading={loading} />
      <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
      />
    </div>
  )
  
}
export default App;
