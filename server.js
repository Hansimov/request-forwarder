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

app.post("/forward/*", (req, res) => {
    let forward_url = req.body.url;
    let forward_method = req.body.method || "POST";
    let forward_headers = req.body.headers || {};
    let forward_body = req.body.body || {};
    console.log(`forward_url: ${forward_url}`);
    console.log(`forward_method: ${forward_method}`);
    console.log(`forward_headers: ${JSON.stringify(forward_headers)}`);
    console.log(`forward_body: ${JSON.stringify(forward_body)}`);
    request({
        url: forward_url,
        method: forward_method,
        headers: forward_headers,
        body: forward_body,
        json: true,
    }).pipe(res);
});

let port = 12444;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
