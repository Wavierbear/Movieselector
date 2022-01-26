/* Avgjør om vi er i produksjonsmiljøet eller i utviklingsmiljøet ved å sjekke verdien av NODE_ENV,
* og bestemmer nøkler deretter. (verdien av NODE_ENV kan sjekkes på denne måten,
* da verdien er lagret i klartekst) 
 */
if(process.env.NODE_ENV === 'production'){ //NODE_ENV = production. Eksporterer nøkler fra prod filen.
    module.exports = require('./prod');
}
else{
   module.exports =  require('./dev'); // NODE_ENV != production. Eksporterer nøkler fra dev filen.
}
