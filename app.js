const express = require(`express`);
const {sequelize} = require(`./models/index`);
let authentication = require(`./controller/authentication.js`);

let app=express();

sequelize.authenticate().then(()=>{
  console.log(`Connection has been successfully established`);

app.set('view engine', 'ejs');
app.use(express.static("public"));

authentication(app);

app.listen(3000);

}).catch(err=>{
  console.log(`Unable to connect to database: ${err}`);
});
