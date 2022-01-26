/*
 * Håndterer verifisering av brukere ved innlogging ved hjelp av passport.
 * Her autentifiseres bruker via google, så derfor brukes GoogleStrategy.
 * En strategy i passport forteller passport hvordan den skal håndtere autentifisering.
 *
 * Filen inneholder async og await syntaks. Disse er for å håndtere asynkrone funksjoner.
 * En funksjon som er asynkron, markeres med async. En asynkron funksjon sender alltid tilbake et løfte (promise).
 * Await brukes kun inne i asynkrone funksjoner. Await gjør at JavaScript venter til løftet blir oppfylt,
 * og returnerer deretter resultatet.
 */

const passport = require("passport"); // henter inn passport
const GoogleStrategy = require("passport-google-oauth20").Strategy; // henter inn Strategy for bruk med passport
const mongoose = require("mongoose"); // henter inn mongoose
const keys = require("../config/keys"); // henter nøkler via keys filen.

// en fil som ikke blir pushet til git

const User = mongoose.model("users"); // binder User til users modellen, og ber mongoose registrere en ny modell,
// om denne ikke allerede eksisterer

const MoviePref = mongoose.model("MoviePref");

// serializeUser og deserialzieUser er obligatorisk
passport.serializeUser((user, done) => {
  // brukerens id blir lagret i session, og håndtert ved hjelp av en cookie.
  done(null, user.id); // ikke samme som profile.id, user.id generert primærnøkkel fra mongo
});

passport.deserializeUser((id, done) => {
  // henter id'en lagret i session
  User.findById(id).then((user) => {
    // henter bruker med gitt id, og returnerer bruker.
    done(null, user);
  });
});

// Ber passport benytte seg av den nye strategien
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID, // nøkkel tilsendt via keys filen.
      clientSecret: keys.googleClientSecret, // nøkkel tilsendt via keys filen.
      callbackURL: "/auth/google/callback", // ruten som bruker blir sendt til når de får verifisert innlogging
      proxy: true, // om ikke proxy:true, så får man http istedenfor https i ruten man bruker. Google godtar ikke dette.
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (false) {
        // Fix bug som gjør navn ikke kommer opp
        done(null, existingUser); // null = ingen feil her, vi er ferdig her har vi brukeren vi har funnet
      } else {
        // tok faen så lang tid å finne riktig kode
        const user = await new User({
          googleId: profile.id || "",
          name: profile.displayName || "",
          bilde: profile.photos[0].value || "",
          epost: profile.emails[0].value || "",
        }).save();
        done(null, user);
      } // profile.id kommer fra google profilen
      // .save vil da lagre bruker i databasen, mongoDB
    }
  )
);
