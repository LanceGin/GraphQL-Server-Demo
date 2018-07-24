# GraphQL-Server-Demo

> `GraphQL-Server-Demo` is a typical example of starting a GraphQL Server with node.js. It is an easy and readable project to learn and understand [GraphQL](https://graphql.org/).

## Screenshots

### Query

![](http://orhcxc3kd.bkt.clouddn.com/query.png)

### Mutation

![](http://orhcxc3kd.bkt.clouddn.com/mutation.png)

## Structure

```
GraphQL-Server-Demo
├── README.md
├── LICENSE
├── .babelrc
├── .gitignore
├── package.json
├── yarn.lock
├── dev.sqlite
├── app.js
├── schemas
│   └── index.js
├── resolvers
│   ├── userResolver.js
│   ├── messageResolver.js
│   └── ...
└── types
    ├── query.js
    ├── mutation.js
    ├── queries
    │    ├── userType.js
    │    ├── messageType.js
    │    └── ... 
    └── mutations
         ├── userInputType.js
         ├── messageInputType.js
         └── ... 
```

* `app.js` -- server engine of this project
* `dev.sqlite` -- test database
* `schemas` -- basic schema to create the `GraphQLSchema`, contanins the basic `queryType` and `mutationType`
* `types` -- all the `GraphQLObjectType` that user defined

## Quick Start

Excute the commands below: 

```shell
git clone git@github.com:LanceGin/GraphQL-Server-Demo.git
cd GraphQL-Server-Demo
yarn && yarn start
```

Open the url `http://localhost:4000/graphql`, you will see the `GraphiQL` GUI in the window, and you can excute the example query and mution operations.

## Query Operation

### Query String

```graphql
query {
  user(id: 1) {
    name
    nickname
    message {
      id
      content
    }
  }
}
```

### Query Result

```json
{
  "data": {
    "user": [
      {
        "name": "gin",
        "nickname": "lancegin",
        "message": [
          {
            "id": "1",
            "content": "test message"
          },
          {
            "id": "2",
            "content": "hello"
          },
          {
            "id": "3",
            "content": "world"
          }
        ]
      }
    ]
  }
}
```

## Mutation Operation

### Mutation String

```graphql
mutation {
  createMessage(input: {user_id: "1", content: "hello world111"}) {
    id
    content
  }
}
```

### Mutation Result

```json
{
  "data": {
    "createMessage": {
      "id": "10",
      "content": "hello world111"
    }
  }
}
```