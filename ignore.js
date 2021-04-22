const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const DB_URL = 'mongodb://localhost:27017/';
let db;
let col;

MongoClient.connect(DB_URL, {useNewUrlParser: true}, function (err, client) {
    if (err) {
        console.log("Error in MongoDB Connection: " + err);
    } else {
        console.log("Connected successfully to server");
        db = client.db('carsdb');
        col = db.collection('newcars');
    }
});

Student.findByIdAndUpdate(
    {_id: updateDetails.id},
    {
        numUnits: updateDetails.numUnits
    },
    function(err, result) {
            if (err) print(err);
            else{
                res.redirect('/getStudents');
            }
    }
);

Author.where({ 'name.firstName': /^T/ }).where('age').gte(25).lte(35).limit(10).sort('age').exec(function (err, docs) {
    console.log(docs);
});