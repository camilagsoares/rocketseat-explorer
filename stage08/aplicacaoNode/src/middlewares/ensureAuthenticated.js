const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;


    if (!authHeader) {
        throw new AppError("JWT Token não informado", 401)
    }

    const [, token] = authHeader.split(" ");

    console.log(token)

    try {
        jwt.verify(token, `${authConfig.jwt.secret}`); 
        return next();
    } catch {
        throw new AppError("JWT Token inválido", 401)
    }
}

module.exports = ensureAuthenticated;