/**
  *  User-defined user objectType.
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

const userType = new GraphQLObjectType({
    name: 'userType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        nickname: {
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

export default userType
