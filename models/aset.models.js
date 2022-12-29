
module.exports = (sequelize, DataTypes) => {
  const asets = sequelize.define('asets', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt:{
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt:{
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    tableName: 'users'
  });

  // Relation
  asets.associate = (models) => {
    asets.belongsTo(models.users,{foreignKey: "user_id",});
};

  return asets;
}