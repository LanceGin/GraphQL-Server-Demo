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
import messageType from './queries/messageType'
import messageInputType from './mutations/messageInputType'

// define the root mutationType object
const mutationType = new GraphQLObjectType({
    name: 'mutationType',
    fields: {
        //insert a new message
        createMessage: {
            type: messageType,
            args: {
                input: {
                    type: messageInputType
                }
            },
            resolve: (_, {input}) => {
                const id = require('crypto').randomBytes(10).toString('hex')
                fakeData.id = input
                return {id, input}
            }
        },
        // update a exist message
        updateMessage: {
            type: messageType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                },
                input: {
                    type: messageInputType
                }
            },
            resolve: (_, {id, input}) => {
                if (!fakeData.id) {
                    throw new Error(`no message exists with id ${id}`)
                }
                fakeData.id = input
                return {id, input}
            }
        }
    }
})

export default mutationType
