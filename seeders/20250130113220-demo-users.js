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
   return queryInterface.bulkInsert('users',[{
    username: "JohnDoe",
    email: "johndoe@example.com",
    phone: "1234567890",
    password: "$2a$10$Xj92zA2DsyYJlIJeH4pVsOe4wQs5RE6uYoDWVG5ThKjLvn6Qf5ty2", // bcrypt hash for "password"
    createdAt: new Date(),
    updatedAt: new Date()
   }] )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
