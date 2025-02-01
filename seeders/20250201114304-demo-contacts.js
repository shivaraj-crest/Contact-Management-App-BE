'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('contacts',[
    {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Jane Doe",
    email: "janedoe@example.com",
    phone: "1234567890",
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "John Smith",
    email: "johnsmith@example.com",
    phone: "1234567890",
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "1234567890",
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   },
  
  
  
  
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
