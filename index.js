/*
* @actor Benjamin Nese
*/
// pw heroku :dgb@123456
const express = require('express'); // henter inn express
const mongoose = require('mongoose'); // henter inn mongoose
const cookieSession = require('cookie-session'); // Hjelpe-bibliotek for cookie håndtering
const passport = require('passport'); // henter inn passport
const bodyParser = require('body-parser'); // henter inn bodyParser
const keys = require('./config/keys'); // henter inn nøkler fra keys filen
const cors = require('cors')
require('./models/User'); // henter inn User Schema fra User filen i models
const movieRoutes = require('./routes/movieRoutes');
require('./services/passport'); // rekkefølgen her er viktig, ettersom de laster inn nødvendig data

mongoose.Promise = global.Promise; 
mongoose.connect(keys.mongoURI); // kobler til MongoDb ved hjelp av moongoose. Bruker tilkoblings-string fra keys filen.

const app = express(); // kaller express, og oppretter en express applikasjon.
app.use(cors());
// Gjør data tilgjengelig for req.body
// For hver gang det kommer en post/put div request, vil den bli kjørt gjennom JSON
// konventeringen for å få riktig text format
app.use(bodyParser.json());

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000, // cookiens levetid i millisekunder. Tilsvarer 30 dager.
      keys: [keys.cookieKey], // henter krypteringsnøkkel fra keys. Legges i en array, da man kan sende inn flere
    // og det vil da bli valgt en tilfeldig.
    }),
);

app.use(passport.initialize()); // initialiserer passport
app.use(passport.session()); // brukes til å endre request objektet lagret i session, som igjen brukes til å finne

app.use('/movie_pref', movieRoutes); //når noen går til localhost../moviesRoutes vil den kjøre movieRoutes
// riktig bruker når passport.deserialize() blir kalt i passport filen.

require('./routes/authRoutes')(app); // autentifiserer

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')); // hvis en get request vi ikke kjenner til kommer inn, gå å sjekk i client/build

  // kjøres om det over ikke blir kjørt
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Port fra heroku eller 5000 om lokalt
const PORT = process.env.PORT || 5000; // velger enten PORT verdien fra process.env variablene, eller port 5000
app.listen(PORT); // ber app lytte til verdi fra PORT
