const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    recipeRouter.delete('/delete/', async (request, response) => {
      try {
        const deleteRecipe = await RecipeModel.finfByAndDelete()
        return response.status(200).json(deleteRecipe)
      } catch (error) {
        console.log (error)
        return response.status(500).json({ msg: "Algo deu errado"})
      }      
    });

    recipeRouter.post('/create-many/', async (request, response) => {
      try {
        const form = request.body;
        const insertRecipe = await RecipeModel.insertMany();
        return response.status(200).json(insertRecipe);
      } catch (error) {
        console.log (error)
        return response.status(500).json({ msg: "Algo deu errado"})
      }      
    });
  })
   
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
