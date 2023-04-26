const dbConfig = require('../config/db.config');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    timezone: dbConfig.timezone,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userModel = require("../src/model/user_model")(sequelize, Sequelize);

module.exports = db;