// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  //mongodb+srv://sohelcuet09:<db_password>@cluster0.el2ir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })