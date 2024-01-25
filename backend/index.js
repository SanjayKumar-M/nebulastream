import express from 'express'

import {graphqlHTTP} from 'express-graphql'
import schema from './graphql/schema.js';

const app = express();


app.get('/',(req,res)=>{res.send("Hello")})
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.listen(5000,()=>{console.log("Server running successfully...")})