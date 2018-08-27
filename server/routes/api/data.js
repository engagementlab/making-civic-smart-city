/**
 * Developed by Engagement Lab, 2018
 * ==============
 * Route to retrieve data by url
 * @class api
 * @author Johnny Richardson
 *
 * ==========
 */
const keystone = require('keystone'),
      mongoose = keystone.get('mongoose'),
      Bluebird = require('bluebird');

mongoose.Promise = require('bluebird');

var buildData = (params, res, selector) => {

    let dataUrl = params.url;
    let list = keystone.list(dataUrl.replace(/^\w/, c => c.toUpperCase()));
    let data;

    if(params.suburl !== undefined)
       data = list.model.findOne({key: params.suburl}).exec();
    else {
        if(selector !== undefined)
           data = list.model.find({}, selector).sort([
                    ['sortOrder', 'ascending']
                  ]).exec();
        else
           data = list.model.find({}).exec();
    }

    Bluebird.props({
        jsonData: data
    })
    .then(results => {
        return res.status(200).json({status: 200, data: results.jsonData});
    }).catch(err => {
        console.log(err);
    })

}

/*
 * Get all data
 */
exports.get = function(req, res) {

    return buildData(req.params, res);

}

/*
 * Get all data
 */
exports.select = function(req, res) {

    return buildData(req.params, res, req.params.selector);

}