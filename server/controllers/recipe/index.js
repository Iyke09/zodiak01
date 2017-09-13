import createRecipe from './addRecipe';
import updateRecipe from './updateRecipe';
import deleteRecipe from './deleteRecipe';
import favoriteRecipe from './favoriteRecipe';
import reviewRecipe from './reviewRecipe';
import sortRecipe from './sortRecipe';
import allRecipe from './allRecipe';

const recipesController = {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  favoriteRecipe,
  allRecipe,
  reviewRecipe,
  sortRecipe
};

export default recipesController;
