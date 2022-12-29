'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [
        {
        name: 'Bani',
        gender: 'laki-laki',
        age: 69,
        role_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        },
        {
          name: 'Budi',
          gender: 'laki-laki',
          age: 40,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Nida',
          gender: 'perempuan',
          age: 42,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Andi',
          gender: 'laki-laki',
          age: 43,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sigit',
          gender: 'laki-laki',
          age: 47,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hari',
          gender: 'laki-laki',
          age: 15,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Siti',
          gender: 'perempuan',
          age: 11,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bila',
          gender: 'perempuan',
          age: 15,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lesti',
          gender: 'perempuan',
          age: 19,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Diki',
          gender: 'laki-laki',
          age: 8,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Doni',
          gender: 'laki-laki',
          age: 18,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Toni',
          gender: 'perempuan',
          age: 12,
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
