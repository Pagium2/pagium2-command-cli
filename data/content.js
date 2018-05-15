'use strict'

var getPackage = function (name, version) {
    return {
        "name": name,
        "version": version,
        "scripts": {
            "dev": "node build/dev-server.js",
            "build": "node build/build.js"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
            "webpack": "^3.10.0",
            "pagium2-core": "^1.0.0"
        }
    }
}

module.exports = {
    getPackage: getPackage
}