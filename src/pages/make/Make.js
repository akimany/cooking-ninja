import './Make.css';
import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// Firestore
import { projectFirestore } from '../../firebase/config';

const Make = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    };
    try {
      await projectFirestore.collection('recipes').add(doc);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  // redirect the user when we get a data response
  // useEffect(() => {
  //   if (data) {
  //     setTimeout(() => {
  //       history.push('/');
  //     }, 2000);
  //   }
  // }, [data, history]);

  return (
    <div className="make">
      <h2 className="page-title">Add new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients{' '}
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method</span>
          <textarea
            onChange={(event) => setMethod(event.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time</span>
          <input
            type="number"
            onChange={(event) => setCookingTime(event.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Make;
