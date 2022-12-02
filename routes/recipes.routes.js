import express from 'express';
import Recipe from "../models/Recipe.model.js";
import data from '../data.json' assert { type: 'json' }

const router = express.Router()

router.post('/create', async (request, response) => {
    try {
      const insertRecipe = await Recipe.create(request.body);

      return response.status(200).json(insertRecipe);

    } catch (error) {
      console.log (error)
      return response.status(500).json({ msg: "Erro"})
    }      
  });

  router.post('/insert', async (request, response) => {
    try {
      const insertRecipes = await Recipe.insertMany(data);

      return response.status(200).json(insertRecipes);
      
    } catch (error) {
      console.log (error)
      return response.status(500).json({ msg: "Erro"})
    }      
  });

  router.post('/edit/:id', async (request, response) => {
    try {
      const { id } = request.params
      const updateRecipe = await Recipe.findByIdAndUpdate(
        id,
        { ...request.body},
        { new: true, runValidators: true }
      )

      return response.status(200).json(updateRecipe);
      
    } catch (error) {
      console.log (error)
      return response.status(500).json({ msg: "Erro"})
    }      
  });

  router.post('/delete/:id', async (request, response) => {
    try {
      const { id } = request.params
      const deleteRecipe = await Recipe.findByIdAndDelete(id)

      return response.status(200).json(updateRecipe);
      
    } catch (error) {
      console.log (error)
      return response.status(500).json({ msg: "Erro"})
    }      
  });
export default router