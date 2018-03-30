/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('template', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    bank_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'bank',
        key: 'id'
      }
    },
    price_formula: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    temrs: {
      type: "BLOB",
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'template'
  });
};
