// vue.config.js (deploy to github)

module.exports = {
    publishpath: process.env.NODE_ENV === "production"
        ? "dragball-project"
        : "/"
}