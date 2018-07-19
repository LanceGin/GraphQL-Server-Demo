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
} from 'grapql'

const messageInputType = new GraphQLInputObjectType({
    name: 'messageInputType',
    fields: {
        content: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        }
    }
})

export default messageInputType
