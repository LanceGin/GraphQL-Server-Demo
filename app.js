const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// create main schema with GraphQL Schema Language 
const schema = buildSchema(`
    input MessageInput {
        content: String
        author: String
    }

    type Message {
        id: ID!
        content: String
        author: String
    }

    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }

    type Query {
        hello: String
        user: [String]
        rollDice(numDice: Int!, numSides: Int): [Int]
        getDie(numSides: Int): RandomDie
        getMessage(id: ID!): Message
    }

    type Mutation {
        createMessage(input: MessageInput): Message
        updateMessage(id: ID!, input: MessageInput): Message
    }
`)

// class RandomDie 
class RandomDie {
    constructor(numSides) {
      this.numSides = numSides
    }

    rollOnce() {
        return 1 + Math.floor(Math.random() * this.numSides)
    }

    roll({numRolls}) {
        const op = []
        for (let i = 0; i < numRolls; i++) {
            op.push(this.rollOnce())
        }
        return op
    }
}

// class Message
class Message {
    constructor(id, {content, author}) {
        this.id = id
        this.content = content
        this.author = author
    }
}

// fake data
const fakeDatabase = {}

// resolver function
const root = {
    hello: () => {
        return 'Hello GraphQL'
    },
    user: () => {
        return [1, 2, 3, 4]
    },
    rollDice: ({numDice, numSides}) => {
        const op = []
        for (let i = 0; i < numDice; i++) {
            op.push(1 + Math.floor(Math.random() * (numSides || 6)))
        }
        return op
    },
    getDie: ({numSides}) => {
        return new RandomDie(numSides || 6)
    },
    getMessage: ({id}) => {
        if (!fakeDatabase.id) {
            throw new Error(`no message exists with id ${id}`)
        }
        return new Message(id, fakeDatabase.id)
    },
    createMessage: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex')
        fakeDatabase.id = input
        return new Message(id, input)
    },
    updateMessage: ({id, input}) => {
        if (!fakeDatabase.id) {
            throw new Error(`no message exists with id ${id}`)
        }
        fakeDatabase.id = input
        return new Message(id, input)
    }
}


// create http server
const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql')