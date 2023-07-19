import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getAllBoats } from '../api/boats.api';

const Search = () => {
  const [boats, setBoats] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBoats = async () => {
      const boatsfromDB = await getAllBoats();
      setBoats(boatsfromDB);
    };
    fetchBoats();
  }, []);
  const handleSearch = searchBoats => {
    const filteredBoats = boats.filter(boat =>
      boat.title.toLowerCase().includes(searchBoats.toLowerCase())
    );
    setSearchResults(filteredBoats);
  };

  return (
    <div>
      <h1>Search</h1>
      <Navbar onSearch={handleSearch} />

      {searchResults.map(boat => (
        <div key={boat.id}>{boat.title}</div>
      ))}
    </div>
  );
};

export default Search;
