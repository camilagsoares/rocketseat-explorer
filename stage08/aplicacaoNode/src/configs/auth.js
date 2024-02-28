module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default",
        expiresIn: 60 * 60 * 3
    }
}