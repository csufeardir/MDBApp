//Addressing Dependencies
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const mongoose = require('mongoose');
//

//Setting up Express
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();
//

//Addressing Database
const mongoDB = // INSERT YOUR KEY HERE //
//

//Establishing a DB Connection
mongoose.connect(mongoDB,
  { useNewUrlParser: true }
);
let db = mongoose.connection;
//

//Log the Connection
db.once("open", ()=>{
	console.log("Connection Established")
})
//

//Fetch data from DB
router.get("/getData", (req, res) => {
    Data.find( {} , function(err, data) {
        if (err) console.log('Fetching Unsuccessful');
        return res.json({ data });
    });
});
//

//Initialize Data
router.post("/putData", (req, res) => {
    console.log(req.body[0])
  let data = new Data();
    for(var k=0;k<req.body.length;k++){

        let source = req.body[k];
        data.id = source.id;
        data.firstName = source.firstName;
        data.lastName = source.lastName;
        data.age= source.age;
        data.nationality= source.nationality;
        Data.collection.insertOne(data, function(err){
            if(err) console.log(err);
        })
    }

});
//


// Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
//
// Append API for HTTP requests
app.use("/api", router);
//
// Start Server
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
//
