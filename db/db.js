const { MongoClient } = require('mongodb');
const url = 'mongodb://root:123456@mongo:27017';
const dbName = 'test';

const db = {
    connect: async function(){
        let client = await MongoClient.connect(url, {useNewUrlParser: true});
        let coll = client.db(dbName).collection('testColl');
        coll.insertOne({ test: 1 });
        coll.find().forEach(doc=>console.log(doc));
        client.close();
    }
}

module.exports = { db };