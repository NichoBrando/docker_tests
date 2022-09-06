const express = require('express');
const app = express();

const uri = "mongodb://mongo:27017/test-docker";

const { MongoClient } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(async (_req, res) => {
    await client.connect();
    const db = client.db();
    const testsCollection = db.collection('tests');
    const tests = await testsCollection.find().toArray();
    await testsCollection.insertOne({ name: Math.random().toString(36).substring(7) });
    res.send(JSON.stringify(tests));
});

app.listen(3000, () => console.log('Listening on port 3001'));