# GraphQL-Server-Demo

`GraphQL-Server-Demo` is a typical example of starting a GraphQL Server with node.js. It is an easy and readable project to learn and understand [GraphQL](https://graphql.org/).

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

## Start Server

Excute the commands below: 

```shell
git clone git@github.com:LanceGin/GraphQL-Server-Demo.git
cd GraphQL-Server-Demo
yarn && yarn start
```

Open the url `http://localhost:4000/graphql`, you will see the `GraphiQL` GUI in the window, and you can excute the example query and mution operations.

## Query Operation Test

## Mutation Operation Test