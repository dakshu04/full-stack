// const express = require("express");

// const app = express();
// //logs the method, timestamp and URL

// function loggerMiddleware(req, res, next) {
//     console.log("Method is " + req.method);
//     console.log("Host is " + req.hostname);
//     console.log("Route is " + req.url);
//     console.log(new Date());

//     next();
// }

// app.use(loggerMiddleware);

// app.get("/sum", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a - b
//     })
// });

// app.listen(3000);


const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define a POST route to handle JSON data
app.post('/sum', (req, res) => {
    console.log(req.body)
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

  // Send a response
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});