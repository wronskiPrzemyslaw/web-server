module.exports = {
    requireAuthentication: function(req, res, next) {
        console.log("private route hit!");
        next();
    },
    logger: function(req, res, next) {
        console.log(new Date().toString() + " " + req.method + " " + req.originalUrl);
        next();
    }
};