var neo4jDriver = require('./neo4j.driver.js');

module.exports = function (app) {
    app.get('/api/setup', function (req, res) {

        var session = neo4jDriver.session();
        session
            .run("MATCH (a:Person:Student:Developer {name:'Mathew', title: 'King'}) RETURN a.name as name")
            .then(function (result) {
                if (!result.records.length) {
                    session.run("CREATE (a:Person:Student:Developer {name:'Mathew', title:'King'})");
                }
                return session.run("MATCH (a:Person) WHERE a.name = 'Arthur' RETURN a.name AS name, a.title AS title");
            }).then(function (result) {
                console.log(result.records[0].get("title") + " " + result.records[0].get("name"));
                session.close();
                neo4jDriver.close();
                res.send('Server configured correctly');
            })
    })
}