const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON body

app.post("/sum", function (req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
