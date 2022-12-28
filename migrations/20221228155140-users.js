'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.createTable('users', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender:{
        type: Sequelize.ENUM('laki-laki', 'perempuan'),
        allowNull: false
      },
      age:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      role_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
      });

      await queryInterface.addConstraint('users',{
        type: 'foreign key',
        name: 'role_id_users',
        fields:['role_id'],
        references:{
          table: 'role',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
