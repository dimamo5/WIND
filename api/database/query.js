const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const crypto = require('crypto');

// Connection URL
const url = 'mongodb://localhost:27017/WIMD';
let dbConn = {};

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  if(err){
      console.log("Erro connecting to MongoDB");
  }
  else{
      console.log("Connected successfully to server");
      dbConn=db;
  }

});

function login(username,password){
    var hashPass = crypto.createHash('sha256').update(password).digest('hex');

    const collection = dbConn.collection('auth');

    return collection.findOne({username:username,password:hashPass})
}

function register(username,password,mail){
    var hashPass = crypto.createHash('sha256').update(password).digest('hex');

    const auth = dbConn.collection('auth');
    const users = dbConn.collection('users');

    return users.insertOne({name:"Diogo",birthdate:new Date("1995-08-05"),gender:"M"})
    .then((user)=>{
        return auth.insertOne({"_id":ObjectID(user.insertedId),username:username,password:hashPass,mail:mail,verified:false})
    })
}

module.exports.login=login;
module.exports.register=register;