const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// 使用 GraphQL Schema Language 创建一个schema
const schema = buildSchema(`
    type Query {
        hello: String
        user: [String]
    }
`)

// root 提供所有 API 入口端点相应的解析器函数
const root = {
    hello: () => {
        return 'Hello GraphQL'
    },
    user: () => {
        return [1, 2, 3, 4]
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