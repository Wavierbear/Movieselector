// Sjekker om bruker er logget inn. Hvis ikke, sendes en feilmelding
// Hentet fra udeamy.com kurset
module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(401).send({error: 'You must log in!'});
    }
    next(); //alt går greit, la bruker gå videre til request handler
};