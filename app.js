/**
  *  The entry file
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { express }
  *
  */
import express from 'express'
import graphqlHTTP from 'express-graphql'

import schema from './schemas/index'

// create http server
const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql')