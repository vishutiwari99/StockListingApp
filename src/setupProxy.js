const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(createProxyMiddleware("/", { target: "https://api.nomics.com" }));
    app.use(createProxyMiddleware("/api", { target: "https://sleepy-basin-09094.herokuapp.com" }));
};