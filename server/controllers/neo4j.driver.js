var neo4j = require('neo4j-driver').v1;
var config = require('../config');

var driver = neo4j.driver(
    config.db.host,
    neo4j.auth.basic(
        config.db.username,
        config.db.pass
    )
);

module.exports = driver;