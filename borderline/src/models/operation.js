/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    operation_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    operation_terms: {
      type: "BLOB",
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
    template_formula: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    creator_op: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    user_op: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    template_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'template',
        key: 'id'
      }
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
    tableName: 'operation'
  });
};
