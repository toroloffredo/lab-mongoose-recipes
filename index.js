/*
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



  .then(() => {
    // Run your code here, after you have insured that the connection was made
    return Recipe.create([
      {
        title: "Ceviche",
        level: "Amateur Chef",
        cuisine: "Latin",
        duration: 40,
      },
    ])

  .then(Recipe.insertMany(data))

  .then((result) => {
    return Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" },{ duration: 100 });
    })

  .then((result) => {
    return Recipe.deleteOne({ title: "Carrot Cake" });
    });
  
  })



  .then(() => {
      console.log("Connection Closed");
      return mongoose.connection.close()
        
      })
      .catch((error) => {
        console.error("Error while closing database connection:", error);
      })

      .catch((error) => {
        console.error("Error connecting to the database", error);
      });



        Recipe.find().then((recipes) => {
          recipes.forEach((recipe) => {
            console.log(recipe.title);
          });
        });

    

*/