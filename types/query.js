/**
  *  The root query objectType.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { GraphQLObjectType }
  *
  */
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import fakeData from '../fakeData'

// import queryType
import messageType from './queries/messageType'
import userType from './queries/userType'

// import resolver
import {
    userInfo
} from '../resolvers/userResolver'

// define the root queryType object
const queryType = new GraphQLObjectType({
    name: 'queryType',
    fields: {
        // field that returns { String }
        hello: {
            type: GraphQLString,
            resolve: (_) => {
                return 'hello world'
            }
        },
        // field that returns { Array }
        world: {
            type: new GraphQLList(GraphQLString),
            resolve: (_) => {
                return [1, 2, 3, 4]
            }
        },
        // field that returns { Array } with arguments
        rollDice: {
            type: new GraphQLList(GraphQLInt),
            args: {
                numDice: {
                    type: new GraphQLNonNull(GraphQLInt),
                },
                numSides: {
                    type: GraphQLInt,
                }
            },
            resolve: (_, {numDice, numSides}) => {
                const op = []
                for (let i = 0; i < numDice; i++) {
                    op.push(1 + Math.floor(Math.random() * (numSides || 6)))
                }
                return op
            }

        },
        // field that returns { userType }
        user: {
            type: new GraphQLList(userType),
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve: async (_, {id}) => {
                const _user = await userInfo({id})
                return _user
            }
        },
        // field that returns { messageType }
        message: {
            type: messageType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (_, {id}) => {
                if (!fakeData[id]) {
                    throw new Error(`no message exists with id ${id}`)
                }
                return fakeData[id]
            }
        }
    }
})

export default queryType
