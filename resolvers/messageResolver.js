/**
  *  The resolvers about message
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { resolver }
  *
  */
import sequelize from './baseResolver'

// messageInfo resolver
const messageInfo = ({id, user_id}) => {
    let sql = `
        SELECT *
        FROM messages
        WHERE 1 = 1
    `

    if (id) {
        sql += `AND id = ${id}`
    }

    if (user_id) {
        sql += `AND user_id = ${user_id}`
    }

    return sequelize.query(sql, {
        type:sequelize.QueryTypes.SELECT
    })
}

// createMessage resolver
const createMessage = (input) => {
    const sql = `
        INSERT INTO messages (user_id, content, created_at, updated_at)
        VALUES ('${input.user_id}', '${input.content}', datetime('now'), datetime('now'));
    `
    return sequelize.query(sql, {
        type: sequelize.QueryTypes.INSERT
    })
}

// updateMessage resolver
const updateMessage = (id, input) => {
    const sql = `
        UPDATE messages
        SET content = '${input.content}'
        WHERE id = ${id};
    `
    return sequelize.query(sql, {
        type: sequelize.QueryTypes.UPDATE
    })
}

export {
    messageInfo,
    createMessage,
    updateMessage
}