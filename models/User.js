

/* Henter inn mongoose, og Schema fra mongoose.
* Lager en ny instans av Schema fra mongoose, som knyttes til const userSchema.
* Vi forteller deretter mongoose at vi vil lage en ny collection, kalt 'users',
* og får oppsettet definert i userSchema.
*/

const mongoose = require('mongoose');
const {Schema} = mongoose;
const moviePrefSchema = require('./MoviePref');

console.log(moviePrefSchema);

const userSchema = new Schema({
  googleId: {type: String, require: true},
  name: String, 
  bilde: String,
  epost: String,
  pref: {type: Schema.Types.ObjectId, ref: 'moviePrefSchema'}, //TODO koble sammen mot filmpreferanse
},{
  timestamps: true,
});

const users = mongoose.model('users', userSchema);
module.exports = users;
