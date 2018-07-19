/**
  *  User-defined message objectType.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { GraphQLObjectType }
  *
  */
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} from 'grapql'

const messageType = new GraphQLObjectType({
    name: 'messageType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        content: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        }
    }
})

export default messageType
