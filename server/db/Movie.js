const Sequelize = require('sequelize');
const db = require('./database');

const Movie = db.define('movie', {
  movieTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  thumsUp: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  thumsDown: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Movie;
