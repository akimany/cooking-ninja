import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?q=${term}`);
    //?q=
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(event) => {
            setTerm(event.target.value);
          }}
          // value={term}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
