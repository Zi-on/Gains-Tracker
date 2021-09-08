const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get('/api/workouts', ({body}, res) => {
    Workout.find(body)
   .then(function(dbWorkout) {
     res.json(dbWorkout);
   })
});

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", ({body,params}, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push:{exercises:body} }
  )
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(function (data) {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

router.post("/api/workouts/range", ({body}, res) => {
  Workout.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router
