import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import './Search.css';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = `http://localhost:3000/recipes?q=${query}`;
  const { data: recipes, error, isPending } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including '{query}'</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">{isPending}</p>}
      {console.log('recipes', recipes)}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Search;
