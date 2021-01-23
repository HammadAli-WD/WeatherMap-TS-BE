const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        pool: {
            //optional!
            min: 0,
            max: 10,
        },
    }
);

module.exports = sequelize;