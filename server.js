const express = require("express");
const cors = require("cors");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: "*",
    })
);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/forward", (req, res) => {
    let options = req.body;
    console.log(`Forward request: ${JSON.stringify(options)}`);
    request(options).pipe(res);
});

let port = 12444;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
