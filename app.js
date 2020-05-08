const express  =  require('express');
const app = express();

app.get('/', (req, res) => {
   res.send("Welcome to my website");
});

app.listen(3000, ()  => {

console.log("Welcome");
});