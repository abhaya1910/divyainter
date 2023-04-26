module.exports = {
    host: "localhost",
    username: "root",
    password: "abhay@123",
    database: "nodejsinterview",
    dialect: "mysql",
    timezone: "+05:30",
    pool: {
        max: 6500,
        min: 0,
        acquire: 60000,
        idle:100000
    }
}