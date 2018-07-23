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
    GraphQLID,
    GraphQLList
} from 'graphql'

// import child type
import messageType from './messageType'

// import resolvers
import {
  messageInfo
} from '../../resolvers/messageResolver'

const userType = new GraphQLObjectType({
    name: 'userType',
    fields: {
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        nickname: {
            type: GraphQLString
        },
        message: {
          type: new GraphQLList(messageType),
          resolve: async (user) => {
            const _message = await messageInfo({ user_id: user.id })
            return _message
          }
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
