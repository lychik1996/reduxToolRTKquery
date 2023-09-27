import { useDispatch, useSelector } from 'react-redux';
import styles from './Recipeitem.module.css';
import { actions } from '../../store/favorite/favorites.slice';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

function RecipeItem({ recipe }) {
  const {favorites} = useFavorites()

  const { toggleToFavorites } = useActions();
  const isExist = favorites.some((r) => r.id === recipe.id);
  console.log(favorites);
  return (
    <div className={styles.item}>
      <img src={recipe.image} width={200} height={200}  alt="" />
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleToFavorites(recipe)}>
        {isExist ? 'Remove from' : 'Add to favorites'}
      </button>
    </div>
  );
}

export default RecipeItem;
