const express = require('express');
const infermedica = require('../request/infermedica');
const mw = require('../request/merrian_webster');
const router = express.Router();
const fs = require('fs');
const db = require('../database/query');



router.post('/', function (req, res) {
    if (!req.body.conditionId) {
        res.status(400).json({
            message: 'Condition Id missing'
        })
        return;
    }

    db.insertConditionsInfo(req.user.id, req.body.conditionId)
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
    if (!req.body.conditionId) {
        res.status(400).json({
            message: 'Condition Id'
        })
        return;
    }

    db.removeConditionsInfo(req.user.id, req.body.conditionId)
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
    db.getConditionsInfo(req.user.id)
        .then((conditions) => {
            res.json(conditions)
        })
        .catch((err) => {
            res.sendStatus(500);
        })
})



module.exports = router;