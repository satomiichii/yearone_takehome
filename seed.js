'use strict';

const { green, red } = require('chalk');
const { db, Movie } = require('./server/db');

const movies = [
  {
    movieTitle: 'Spider-Man',
    thumsUp: 1049,
    thumsDown: 587,
  },
  {
    movieTitle: 'Toy Story',
    thumsUp: 956,
    thumsDown: 344,
  },
  {
    movieTitle: 'Transformers',
    thumsUp: 35,
    thumsDown: 780,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      movies.map((movie) => {
        return Movie.create(movie);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

seed()
  .then(() => {
    console.log(green('Seeding success!'));
    db.close();
  })
  .catch((err) => {
    console.error(red('Oh noes! Something went wrong!'));
    console.error(err);
    db.close();
  });
