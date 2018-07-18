const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// 使用 GraphQL Schema Language 创建一个schema
const schema = buildSchema(`
    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }

    type Query {
        hello: String
        user: [String]
        rollDice(numDice: Int!, numSides: Int): [Int],
        getDie(numSides: Int): RandomDie
    }
`)

// 自定义查询类
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

// root 提供所有 API 入口端点相应的解析器函数
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
    }
}


// 创建 express 服务
const app = express()

// 定义接口地址
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql')