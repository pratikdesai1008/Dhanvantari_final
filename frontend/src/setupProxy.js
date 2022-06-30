const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "http://192.168.29.150:4000", //wi-fi
      // target: "http://192.168.39.200:4000",

      // target: " http://192.168.84.42:4000 ", //mobile
      target: "   http://192.168.226.42:4000     ", //new mobile
      // target: "http://192.168.230.42:4000  ", //pranav mobile
      // target: " http://192.168.0.149:4000", //college wifi

      changeOrigin: true,
    })
  );
};
