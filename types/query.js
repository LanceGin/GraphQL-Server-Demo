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
} from 'grapql'

import fakeData from '../fakeData'
import messageType from './queries/messageType'

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
        user: {
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
        // field that returns { UserDifinedType }
        message: {
            type: messageType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (_, {id}) => {
                if (!fakeData.id) {
                    throw new Error(`no message exists with id ${id}`)
                }
                return {id, fakeData.id}
            }
        }
    }
})

export default queryType
