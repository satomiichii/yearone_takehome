'use strict';

const router = require('express').Router();
const { Movie } = require('../db');

router.get('/movies/:title', async (req, res, next) => {
  try {
    const title = req.params.title;
    const movie = await Movie.findOne({
      where: { movieTitle: title },
    });
    res.send(movie);
  } catch (error) {
    next(error);
  }
});

router.post('/movies', async (req, res, next) => {
  try {
    const title = req.body.movieTitle;
    const movie = await Movie.findOne({
      where: { movieTitle: title },
    });
    if (!movie) {
      const newMovie = await Movie.create(req.body);
      res.json(newMovie);
    } else {
      const updatedMovie = await movie.update(req.body);
      res.json(updatedMovie);
    }
  } catch (error) {}
});

module.exports = router;
