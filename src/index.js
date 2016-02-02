'use strict'

import express from 'express';
import graphqlHTTP from 'express-graphql';
import {Schema} from './schema'

var app = express();

app.use('/graphql', graphqlHTTP({ 
	schema: Schema, 
	graphiql: true 
}));

app.listen(3000, function () {
});