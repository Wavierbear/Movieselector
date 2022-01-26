/*
 * Forfatter: Håkon Ruud
 */

// Tar seg av get requests på forskjellige paths. Deretter kjøres koden spesifisert for den "pathen"

const passport = require("passport"); // henter inn passport

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      //'google', GoogleStrategy idenfiserer seg til passport som 'google' under the hood
      scope: ["profile", "email"], //henter ut profil og email fra google brukeren
      prompt: "select_account", //la til så må velge bruker hver gang man skal logge inn
    }) //req.user inneholder brukeren, les dokumentasjon på passportjs.org
  ); //https://developers.google.com/identity/protocols/oauth2/scopes
  //https://developers.google.com/people/api/rest/v1/people/get

  app.get(
    "/auth/google/callback", // google har sendt tilbake info om bruker
    passport.authenticate("google"), //passport ser dette og bruker denne informasjonen til å lage profil
    (req, res) => {
      //sender videre til gitt path
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    // get request kjøres mot path
    req.logout(); // req kaller logout(), som fjerner den autentifiserte brukeren fra req
    res.redirect("/"); // som en respons på get requesten kalles redirect som spesifiserer gitt path
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user); // sender tilbake informasjon om den innloggede brukeren som respons på get request
  });
};
