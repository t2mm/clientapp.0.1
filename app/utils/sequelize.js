var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://localhost:5432/t2mm_dev1')

module.exports = sequelize