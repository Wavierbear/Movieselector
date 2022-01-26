/* Denne filen inneholder produksjonsnøklene
* Setter verdiene til nøklene basert på process.env variablene.
* env variablene får sine verdier fra heroku, hvor disse er lagret.
* Dette blir gjort for å gi tilgang til de sensitive nøklene, uten at noen kan lese dem.
*/
module.exports = {  
    googleClientID: process.env.GOOGLE_CLIENT_ID, // klient ID fra google
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET, // klientens "secret"
    mongoURI: process.env.MONGO_URI, // Tilkoblings "string" for å koble seg til MongoDB database 
    cookieKey: process.env.COOKIE_KEY, // Egendefinert nøkkel for kryptering av cookies
    redirectDomain: process.env.REDIRECT_DOMAIN // Inneholder eget heroku domene
};