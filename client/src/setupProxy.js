const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  //trengs bare i dev mode, på heroku eksistere ikke create app react
  app.use(
    ["/api", "/auth/google/", "/movie_pref"],
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
    })
  );
};
