const express = require("express");

const app = express();

app.get("/sum/:firstArgument/:secondArgument", function (req, res) {
    // Parse route parameters as integers
    const a = parseInt(req.params.firstArgument);
    const b = parseInt(req.params.secondArgument);

    // Return the sum
    res.json({
        answer: a + b,
    });
});

app.get("/multiply/:firstArgument/:secondArgument", function (req, res) {
    // Parse route parameters as integers
    const a = parseInt(req.params.firstArgument);
    const b = parseInt(req.params.secondArgument);

    // Return the product
    res.json({
        answer: a * b,
    });
});


app.get("/divide/:firstArgument/:secondArgument", function (req, res) {
    // Parse route parameters as integers
    const a = parseInt(req.params.firstArgument);
    const b = parseInt(req.params.secondArgument);

    // Return the sum
    res.json({
        answer: a / b,
    });
});

app.get("/sum/:firstArgument/:secondArgument", function (req, res) {
    // Parse route parameters as integers
    const a = parseInt(req.params.firstArgument);
    const b = parseInt(req.params.secondArgument);

    // Return the sum
    res.json({
        answer: a - b,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
