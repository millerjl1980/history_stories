import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { Items } from './components/Items';
import { Pagination } from './components/Pagination';

const ITEMS_URL = "https://justinmiller.dev/api_test/example.php";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get(ITEMS_URL);
      setItems(res.data.results);
      setLoading(false);
    }
    fetchItems();
  }, []);

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return(
    <div className="App">
      <Items items={currentItems} loading={loading} />
      <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  )
  
}
export default App;
