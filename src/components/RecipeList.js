import { projectFirestore } from '../firebase/config';
import Trashcan from '../assets/trashcan.svg';

// styles
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  if (recipes.length === 0) {
    return <div className="error"> No recipes to load...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Details page</Link>
          <img
            onClick={(event) => {
              handleClick(recipe.id);
            }}
            className="delete"
            src={Trashcan}
            alt="delete"
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
