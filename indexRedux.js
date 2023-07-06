const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://127.0.0.1:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
    .connect(MONGODB_URI)
    .then((x) => {
        console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
        return Recipe.deleteMany();
    })
    .catch((error) => {
        console.error("Error connecting to the database", error);
    });

const recipes = async() => {
    try {
        await Recipe.create([
          {
            title: "Ceviche",
            level: "Amateur Chef",
            cuisine: "Latin",
            duration: 40
          }
        ]);
        
        await Recipe.insertMany(data);
        await Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" },{ duration: 100 })
        await Recipe.deleteOne({ title: "Carrot Cake" })
        
        const recipeTitle = await Recipe.find();
         recipeTitle.forEach((recipe) => {
           console.log(recipe.title);
         });

         await mongoose.connection.close();
         console.log("Connection Closed");

    } 
    catch (error) {console.log(error)};
    
}

recipes()

  .then(() => {
    console.log("All operations done");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
      



