'use strict';


// TODO 
// Must using Pivot table
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('asets', [
        {
          name: 'iPhone 9',
          user_id: 6,
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
          name: 'Samsung Galaxy Book',
          user_id:2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'iPhone X',
          user_id:7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Huawei P30',
          user_id:3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Samsung Universe 9',
          user_id:8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Huawei P30',
          user_id:9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'iPhone X',
          user_id:9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Samsung Universe 9',
          user_id:4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Samsung Galaxy Book',
          user_id:10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Huawei P30',
          user_id:5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'iPhone X',
          user_id:11,
          created_at: new Date(),
          updated_at: new Date(),
        },

        
        
        

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('asets', null, {});
     
  }
};
