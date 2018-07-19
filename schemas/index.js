/**
  *  The main schema object of GraphQL.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { GraphQLSchema }
  *
  */
const graphql = require('graphql')

const queryType = require('../types/query')
const mutationType = require('../types/mutation')

const schema = new graphql.GraphQLSchema({
    query: queryType,
    mutation: mutationType
})

export default schema
