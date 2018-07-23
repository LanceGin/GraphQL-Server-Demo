/**
  *  The root mutation objectType.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { GraphQLObjectType }
  *
  */
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import fakeData from '../fakeData'

// import queryType
import messageType from './queries/messageType'
import userType from './queries/userType'

// import mutationType
import messageInputType from './mutations/messageInputType'
import userInputType from './mutations/userInputType'

// import resolver
import {
    userInfo,
    createUser,
    updateUser
} from '../resolvers/userResolver'
import {
    messageInfo,
    createMessage,
    updateMessage
} from '../resolvers/messageResolver'


// define the root mutationType object
const mutationType = new GraphQLObjectType({
    name: 'mutationType',
    fields: {
        // insert a new user
        createUser: {
            type: userType,
            args: {
                input: {
                    type: userInputType
                }
            },
            resolve: async (_, {input}) => {
                const _create = await createUser(input)
                const _user = await userInfo({ id: _create[0] })
                return _user[0]
            }
        },
        // update a exist user
        updateUser: {
            type: userType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                },
                input: {
                    type: userInputType
                }
            },
            resolve: async (_, {id, input}) => {
                const _update = await updateUser(id, input)
                const _user = await userInfo({ id })
                return _user[0]
            }
        },
        // insert a new message
        createMessage: {
            type: messageType,
            args: {
                input: {
                    type: messageInputType
                }
            },
            resolve: async (_, {input}) => {
                const _create = await createMessage(input)
                const _message = await messageInfo({ id: _create[0] })
                return _message[0]
            }
        },
        // update a exist message
        updateMessage: {
            type: messageType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                },
                input: {
                    type: messageInputType
                }
            },
            resolve: async (_, {id, input}) => {
                const _update = await updateMessage(id, input)
                const _message = await messageInfo({ id }) 
                return _message[0]
            }
        }
    }
})

export default mutationType
