'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('role', [
        {
          name: 'grandparents',
          description: 'Kakek atau Nenek',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'parents',
          description: 'Ayah atau Ibu',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'children',
          description: 'Anak laki-laki dan anak Perempuan',
          created_at: new Date(),
          updated_at: new Date(),
        },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('role', null, {});
     
  }
};
