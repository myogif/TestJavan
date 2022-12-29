'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('asets', [
        {
          name: null,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Samsung Universe 9',
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: null,
          user_id:3,
          created_at: new Date(),
          updated_at: new Date(),
        },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('asets', null, {});
     
  }
};
