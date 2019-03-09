const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express();
const port = process.env.PORT || '4000'
const db = process.env.MONGODB

// Connect to MongoDB with Mongoose.
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
    expressGraphQL({
        schema,
        graphiql: true
    }));
    
app.listen(port, () => console.log(`Server running on port ${port}`));


