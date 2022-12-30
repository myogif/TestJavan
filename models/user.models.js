
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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
    gender:{
      type: DataTypes.ENUM('laki-laki', 'perempuan'),
      allowNull: false
    },
    age:{
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    role_id:{
      type: DataTypes.INTEGER(3),
      allowNull: false,
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
  users.associate = (models) => {
    users.belongsTo(models.role,{foreignKey: "role_id",});
    users.hasMany(models.asets,{foreignKey: "user_id",});
};

  return users;
}