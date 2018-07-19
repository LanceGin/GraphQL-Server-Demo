/**
  *  The main schema object of GraphQL.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { GraphQLSchema }
  *
  */
import {
    GraphQLSchema
} from 'graphql'

import queryType from '../types/query'
import mutationType from '../types/mutation'

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
})

export default schema
