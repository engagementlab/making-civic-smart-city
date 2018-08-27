/**
 * Developed by Engagement Lab, 2018
 * ==============
 * App boot logic
 *
 * @static
 * @author Johnny Richardson
 *
 * ==========
 */

// Load .env vars
if(process.env.NODE_ENV !== 'test')
	require('dotenv').load();

const SiteFactory = require('./factory'),
		 express = require('express');

_ = require('lodash');

// Return server object
serverStart = function() {

	return express();

};

module.exports = function() {
	
	require('fs').readFile('./config.json', {encoding: 'utf8'}, function (err, data) {
	  
	  if (err) throw err;
	  var configData = 	JSON.parse(data);

		new SiteFactory({ 

			config: configData

		});

	})

}();