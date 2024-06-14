const APP_ID = '27c1df23';
const APP_KEY = '34a0c75c450be6abedba7dad132a8d3d';

export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
};
