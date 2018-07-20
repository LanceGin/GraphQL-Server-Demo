/**
  *  User-defined userInputType objectType.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { GraphQLInputObjectType }
  *
  */
import {
    GraphQLInputObjectType,
    GraphQLString,
} from 'graphql'

const userInputType = new GraphQLInputObjectType({
    name: 'userInputType',
    fields: {
        name: {
            type: GraphQLString
        },
        nickname: {
            type: GraphQLString
        }
    }
})

export default userInputType
