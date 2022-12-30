
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
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
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt:{
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt:{
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false
    }
  },{
    tableName: 'users'
  });

  // Relation
  role.associate = (models) => {
    role.hasMany(models.users,{foreignKey: "role_id",});
};

  return role;
}