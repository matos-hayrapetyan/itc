var bodyParser = require('body-parser');

var neo4jDriver = require('./neo4j.driver.js');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/persons',function(req,res){
        var session = neo4jDriver.session();

        session
            .run("MATCH (a:Person) RETURN a.name,a.email")
            .then(function(result){
                var persons = [];
                for(var person in result.records){
                    persons[person] = {};
                    persons[person]['name'] = result.records[person].get('a.name');
                    persons[person]['email'] = result.records[person].get('a.email');
                }
                res.send(JSON.stringify(persons), null, 4);
            })
    });
}