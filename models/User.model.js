import mongoose from 'mongoose';{ model, Schema } from "mongoose"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  username: {
    type: String,  
    require: true,
    unique: true
  },
  bio: {
    type: String
  },
  age: {
    type:number
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  isChef: {
    type: Boolean,
    default: false
  },
  recipes: {
    type: Schema.Types.ObjectId,
    ref: "recipe"
  }
},
{
  timestamps: true,
}
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;