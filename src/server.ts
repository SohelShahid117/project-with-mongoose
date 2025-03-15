import app from "./app";
import config from "./app/config";

// getting-started.js
// const mongoose = require('mongoose');
import mongoose from "mongoose"

main().catch(err => console.log(err));

async function main() {
  try{
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  }
  catch(err){
    console.log(err)
  }
  // await mongoose.connect(process.env.DATABASE_URL);
  // await mongoose.connect(config.database_url as string);
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  //mongodb+srv://sohelcuet09:<db_password>@cluster0.el2ir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  // app.listen(config.port, () => {
  //   console.log(`Example app listening on port ${config.port}`)
  // })
}

// app.listen(port, () => {
// app.listen(config.port, () => {
//     console.log(`Example app listening on port ${config.port}`)
//   })

main()