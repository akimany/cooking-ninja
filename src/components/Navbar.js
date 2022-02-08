import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking website</h1>
        </Link>
        <SearchBar />
        <Link to="/make">
          <h1>Make recipe</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
