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
    GraphQLNonNull
} from 'graphql'

const userInputType = new GraphQLInputObjectType({
    name: 'userInputType',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        nickname: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})

export default userInputType
