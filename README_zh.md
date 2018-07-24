# GraphQL-Server-Demo

[readme](https://github.com/LanceGin/GraphQL-Server-Demo/blob/master/README.md)

> `GraphQL-Server-Demo`是一个帮助大家更好的学习和理解GraphQL的简单且易读的示例项目，通过nodejs创建服务

## 截屏

### 查询(Query)

![](http://orhcxc3kd.bkt.clouddn.com/query.png)

### 变更(Mutation)

![](http://orhcxc3kd.bkt.clouddn.com/mutation.png)

## 项目结构

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

* `app.js` -- 项目服务引擎
* `dev.sqlite` -- 测试数据库
* `schemas` -- 用来创建`GraphQLSchema`的基本schema文件, 包含最基本的`queryType` 和 `mutationType`
* `types` -- 所有用户自定义的`GraphQLObjectType`
* `resolvers` -- 所有类型字段的解析器

## 快速启动

输入以下命令: 

```shell
git clone git@github.com:LanceGin/GraphQL-Server-Demo.git
cd GraphQL-Server-Demo
yarn && yarn start
```

打开url `http://localhost:4000/graphql`，窗口中会显示 `GraphiQL` GUI ，可以用来执行查询或者变更操作

## 查询操作

### 请求语句

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

### 请求结果

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

## 变更操作

### 请求语句

```graphql
mutation {
  createMessage(input: {user_id: "1", content: "hello world111"}) {
    id
    content
  }
}
```

### 请求结果

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