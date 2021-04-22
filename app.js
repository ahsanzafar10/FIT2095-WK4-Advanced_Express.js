let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let print = console.log;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let db = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('css'));


// Endpoints
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/newemployee', function(req, res) {
    res.sendFile(__dirname + '/views/newemployee.html');
});

app.get('/invalid', function(req, res) {
    res.sendFile(__dirname + '/views/invalid.html');
});

app.get('/listemployees', function(req, res) {
    res.render("listemployees.html", {ar: db});
});

app.post('/postaddemployee', function(req, res) {
    newName = req.body.name;
    dobYear = new Date(req.body.dob).getFullYear();
    newDepartment = req.body.department;
    currentYear = new Date().getFullYear();

    if (newName.length < 3 || newDepartment.length < 3 || ((currentYear - dobYear) < 16 )) {
        res.redirect('/invalid');
    }   

    let newRecord =  {name: newName, dob:req.body.dob, department:newDepartment};
    db.push(newRecord);
    res.redirect('/listemployees');
});

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/views/404.html");
})

app.listen(8081);