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
} from 'graphql'

const messageType = new GraphQLObjectType({
    name: 'messageType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        user_id: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        created_at: {
            type: GraphQLString
        },
        updated_at: {
            type: GraphQLString
        }
    }
})

export default messageType
