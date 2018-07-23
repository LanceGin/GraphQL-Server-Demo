/**
  *  User-defined messageInputType objectType.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { GraphQLInputObjectType }
  *
  */
import {
    GraphQLInputObjectType,
    GraphQLString,
} from 'graphql'

const messageInputType = new GraphQLInputObjectType({
    name: 'messageInputType',
    fields: {
        user_id: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    }
})

export default messageInputType
