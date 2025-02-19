const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip); // post method adds a trip

//GET method routes tripsFindCode - requires Parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(tripsController.tripsUpdateTrip); 
module.exports = router;