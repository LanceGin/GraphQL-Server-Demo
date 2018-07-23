/**
  *  The resolvers about user
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { resolver }
  *
  */
import sequelize from './baseResolver'

// userInfo resolver
const userInfo = ({id}) => {
    let sql = `
        SELECT *
        FROM users
    `
    
    if (id) {
        sql += `
            WHERE id = ${id};
        `
    }

    return sequelize.query(sql, {
        type:sequelize.QueryTypes.SELECT
    })
}

// createUser resolver
const createUser = (input) => {
    const sql = `
        INSERT INTO users (name, nickname, created_at, updated_at)
        VALUES ('${input.name}', '${input.nickname}', datetime('now'), datetime('now'));
    `
    return sequelize.query(sql, {
        type: sequelize.QueryTypes.INSERT
    })
}

// updateUser resolver
const updateUser = (id, input) => {
    const sql = `
        UPDATE users
        SET name = '${input.name}', nickname = '${input.nickname}'
        WHERE id = ${id};
    `
    return sequelize.query(sql, {
        type: sequelize.QueryTypes.UPDATE
    })
}

export {
    userInfo,
    createUser,
    updateUser
}