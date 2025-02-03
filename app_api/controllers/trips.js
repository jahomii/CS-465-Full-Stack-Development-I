const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
const Model = mongoose.model('trips');

// GET /trips - lists all trips
// outcome must always include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // return all records
        .exec();

    //uncomment the following line to show the results 
    // of a query on the console
    //console.log(q);

    if(!q)
    { //database retruned no data
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

// GET /trips - lists a single trip
// outcome must always include HTML status code
// and JSON message to the requesting client
const tripsFindCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // return a single record
        .exec();

    //uncomment the following line to show the results 
    // of a query on the console
    //console.log(q);

    if(!q)
    { //database retruned no data
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindCode
};