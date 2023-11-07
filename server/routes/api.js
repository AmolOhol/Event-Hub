const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const db = "_________";
//const db = "mongodb://localhost:27017";

/*const app= express();
const {MongoClient} = require('mongodb');

const URL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(URL);
*/


/*mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});*/


function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

//router.use(cors())
/*app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");
  res.header("Access-Control-Allow-Header",
  "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
})

app.get('/events',async(req,res)=>{
  const result =await db.connect();
  const db1 = result.db("Amol");
  console.log(db1);
  const collection = db1.collection("events");
  const data = await collection.find({}).toArray();
  res.json(data);
})*/

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Angular: Web Development",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "2",
      "name": "Python: Machine Learning",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "3",
      "name": "Machine Learning",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "4",
      "name": "GoLang",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "5",
      "name": "IPhone Programming",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "6",
      "name": "Android Programming",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    }
  ]
  res.json(events)
})



router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "IOT",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "2",
      "name": "IOS Internals",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "3",
      "name": "LSP",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "4",
      "name": "Struts",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "5",
      "name": "Embedded Programming",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "6",
      "name": "IOT Workshop",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    }
  ]
  res.json(specialEvents)
})


router.get('/takeAdmission', (req,res) => {
  let takeAdmission = [
   {
    "_id": "1",
    "name": "Amol"
   }
   
   
  ]
  res.json(takeAdmission)
})


router.post('/login', (req, res) => {
    let userData = req.body
    
    if ((userData.email == "Marvellous") && (userData.password == "Amol")) 
    {
      let payload = {subject: 1}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})   
    } 
    else 
    {
        res.status(401).send('Invalid Password')
    } 
})

module.exports = router;