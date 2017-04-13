const express = require('express');
const infermedica = require('../request/infermedica');
const mw = require('../request/merrian_webster');
const router = express.Router();
const fs = require('fs');
const db = require('../database/query');


router.post('/', function (req, res) {
  if (!req.body.symptomId) {
    res.status(400).json({
      message: 'Symptom Id missing'
    })
    return;
  }

  db.insertSymptomsInfo(req.user.id, req.body.symptomId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: err
      })
    })

})

router.delete('/', function (req, res) {
  if (!req.body.symptomId || !req.body.symptomDate) {
    res.status(400).json({
      message: 'Symptom Id or date missing'
    })
    return;
  }

  db.removeSymptomsInfo(req.user.id, req.body.symptomId, req.body.symptomDate)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: err
      })
    })
})

router.get('/', function (req, res) {

  db.getSymptomsInfo(req.user.id)
  .then((symptoms) => {
    res.json(symptoms
    )
  })
  .catch((err)=>{
    res.sendStatus(500);
  })
})



module.exports = router;