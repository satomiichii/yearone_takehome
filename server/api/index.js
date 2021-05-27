'use strict';

const router = require('express').Router();
const { Movie } = require('../db');

router.get('/movies', async (req, res, next) => {
  try {
    const title = req.query.title;
    const movie = await Movie.findOne({
      where: { movieTitle: title },
    });
    res.send(movie);
  } catch (error) {
    next(error);
  }
});

// router.post('/movies', async (req, res, next) => {
//   try {
//     const title = req.query.title;

//     const [movie, created] = await Movie.findOrCreate({
//       where: { movieTitle: title },

//     });
//     if(created) {
//         res.json(movie)
//     } else {
//         const
//     }
//   } catch (error) {}
// });

module.exports = router;
