import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';
import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';
import User from './user/User';



function App() {
  const {user}= useSelector(state => state.users);
  const userId = user.name;
  console.log(userId);

  const {isLoading, data} =useGetRecipesQuery(undefined, {
    skip:!userId,
  });
  
  return (
    <section>
      <Header/>
      <User/>
      <CreateRecipe/>
      <div>
        {isLoading?<div>Loading...</div>:
        data? data.map(recipe =>
          (<RecipeItem
          key={recipe.id}
          recipe={recipe}
          />)
        ) : <div>NOT FOUND</div>}
      </div>
    </section>
  );
}

export default App;
