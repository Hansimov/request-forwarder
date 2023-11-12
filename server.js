const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());

app.use(
    "/forward",
    createProxyMiddleware({
        target: "https://copilot.github1s.tk",
        changeOrigin: true,
        pathRewrite: {
            "^/forward/": "",
        },
    })
);

const port = 12444;
app.listen(port);
console.log(`Forwarder running at port: "${port}"`);
