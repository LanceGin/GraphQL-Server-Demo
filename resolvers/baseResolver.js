/**
  *  The base sequelize object.
  *
  *  @author   : Gin (gin.lance.inside@hotmail.com)
  *  @export   : { Sequelize }
  *
  */
import Sequelize from 'sequelize'

const sequelize = new Sequelize('main', null, null, {
    dialect: 'sqlite',
    dialectOptions: {
        multipleStatements: true
    },
    storage: './dev.sqlite'
})

export default sequelize
