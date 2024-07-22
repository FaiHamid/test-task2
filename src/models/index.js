require('dotenv').config();
const { Sequelize } = require('sequelize')
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
})

export const sequelizeConnection = async () => {
  try {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Postgres connection has been established successfully.')
      })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
}
}

const Student = require('./Student')(sequelize, DataTypes);
const Mark = require('./Mark')(sequelize, DataTypes);


Student.hasMany(Mark, { foreignKey: 'student_id' });
Mark.belongsTo(Student, { foreignKey: 'student_id' });


module.exports = { sequelize, Student, Mark };