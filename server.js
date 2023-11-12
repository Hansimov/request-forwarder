const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
app.use(cors());

app.use("/forward/*", function (req, res, next) {
    const target = req.params[0];
    console.log(target);
    createProxyMiddleware({
        target: target,
        changeOrigin: true,
    })(req, res, next);
});

const port = 12444;
app.listen(port);
console.log(`Forwarder running at port: "${port}"`);
