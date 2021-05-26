'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Izuku Midoriya',
        hashedPassword: bcrypt.hashSync('password'),
        firstname: 'Izuku',
        lastname: 'Midoriya',
        bio: null,
        profileImage: null
      },
      {
        email: faker.internet.email(),
        username: 'Gon Freeces',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstname: 'Gon',
        lastname: 'Freeces',
        bio: null,
        profileImage: null
      },
      {
        email: faker.internet.email(),
        username: 'Giorno Giovanna',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        firstname: 'Giorno',
        lastname: 'Giovanna',
        bio: null,
        profileImage: null
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};