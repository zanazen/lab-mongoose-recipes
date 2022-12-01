import mongoose from "mongoose";
import Recipe from "../models/Recipe.model.js";

async function connect() {
    try{
        const dbConnection = mongoose.connect(process.env.MONGODB_URI)

        console.log(`Conectado ao Banco de Dados: "${dbConnection.connection.name}"`);
        return Recipe.deleteMany()
    } catch (error) {
        console.log('erro conectando com a base de dados' , error);
    }
}
