'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [
        {
        name: 'Bani',
        gender: 'laki-laki',
        age: '69',
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        },
        {
          name: 'Andi',
          gender: 'laki-laki',
          age: '40',
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Toni',
          gender: 'laki-laki',
          age: '14',
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        }

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
