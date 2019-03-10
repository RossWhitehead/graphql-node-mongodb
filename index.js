const express = require('express')
const grapghqlHTTP = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const schema = require('./graphql/schema')
const root = require('./graphql/resolvers')

const app = express();
const port = process.env.PORT || '4000'
const db = process.env.MONGODB

mongoose
    .connect(
        db,
        {
            useCreateIndex: true,
            useNewUrlParser: true
        })
    .then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    grapghqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    }));
    
app.listen(port, () => console.log(`Server running on port ${port}`));


