const express = require('express');
const app = express();
const port = 3000;

const lessons = [
  { topic: 'math', location: 'Hendon', price: 100 },
  { topic: 'math', location: 'Colindale', price: 80 },
  { topic: 'math', location: 'Brent Cross', price: 90 },
  { topic: 'math', location: 'Golders Green', price: 120 }
];

const users = {
  email: "user@example.com", password:"23434234qasd"
}

app.get('/lessons', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.json(lessons);
});

app.get("/users", (req,  res)=>{
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.json(users)

})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/lessons`);
});