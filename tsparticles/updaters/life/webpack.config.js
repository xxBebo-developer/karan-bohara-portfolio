const { loadParticlesUpdater } = require("@tsparticles/webpack-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesUpdater({ moduleName: "life", updaterName: "Life", version, dir: __dirname });
