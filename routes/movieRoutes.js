const router = require("express").Router();
const MoviePref = require("../models/MoviePref");

/*
  Forfatter: Benjamin Nese
*/

//Routing for å opprette, endre, slette filmpreferanse

//Finner frem
router.route("/").get((req, res) => {
  MoviePref.find()
    .then((moviePref) => res.json(moviePref))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userId = req.body.userId;
  const genres = req.body.genres;
  const years = req.body.years;
  const ratings = req.body.ratings;

  const newMoviePref = new MoviePref({
    userId,
    genres,
    years,
    ratings,
  });
  // TODO få userID til å funger som oppkobling mot spesefikke brukeren
  newMoviePref
    .save()
    .then(() => res.json("Vellykket"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  MoviePref.findOne(req.userId) //Så kan vi søke med userId istendenfor ID fra mongoDB
    .then((moviePref) => res.json(moviePref))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  MoviePref.MoviePref.findOneAndDelete(req.userId)
    .then(() => res.json("MoviePref deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  MoviePref.findOne(req.userId)
    .then((moviePref) => {
      moviePref.gendres = req.body.gendres;
      moviePref
        .save()
        .then(() => res.json("MoviePref updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router; // ekspotere router må gjøres på alle
