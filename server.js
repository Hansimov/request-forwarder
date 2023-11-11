const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");
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
    console.log(req.body);
    // console.log(req.headers);
    // console.log(req.url);
    const url = req.body.url;
    // const headers = data.headers;
    // const body = data.body;

    request({
        url: url,
        method: "POST",
        // headers: headers,
        // body: body,
        json: true,
    }).pipe(res);
});

let port = 12444;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
