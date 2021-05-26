'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
      name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('Stories', [{
      title: 'John Doe',
      content: 'Example Story',
      userId: 1,
      storyImage: 'Test Image'
    }, { title: 'James Doe',
    content: 'Example Story 2',
    userId: 2,
    storyImage: 'Test Image 2'}, 
    { title: 'Jane Doe',
    content: 'Example Story 3',
    userId: 3,
    storyImage: 'Test Image 3'}], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
