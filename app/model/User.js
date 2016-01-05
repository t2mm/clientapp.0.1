var Sequelize = require('sequelize')

var attributes = {
  // username: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true,
  //   validate: {
  //     is: /^[a-z0-9\_\-]+$/i,
  //   }
  // },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  
  child_name: {
    type: Sequelize.STRING(100)
  },
  
  family_name: {
    type: Sequelize.STRING(100)
  },

  child_dob : {
    type: Sequelize.DATE
  },

  mothers_name: {
    type: Sequelize.STRING(100)
  },
  
  fathers_name: {
    type: Sequelize.STRING(100)
  },

  mothers_contact_no: {
    type: Sequelize.INTEGER
  },

  fathers_contact_no: {
    type: Sequelize.INTEGER
  },

  working_mother: {
    type : Sequelize.BOOLEAN
  },

  working_father: {
    type : Sequelize.BOOLEAN
  },

  maternity_leave: {
    type : Sequelize.BOOLEAN
  },

  phone_model_1: {
    type: Sequelize.STRING(100)
  },

  phone_model_2: {
    type: Sequelize.STRING(100)
  },

  tablet_model_1: {
    type: Sequelize.STRING(100)
  },

  tablet_model_2: {
    type: Sequelize.STRING(100)
  },
  
  password: {
    type: Sequelize.STRING(100)
  },
  
  salt: {
    type: Sequelize.STRING
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options