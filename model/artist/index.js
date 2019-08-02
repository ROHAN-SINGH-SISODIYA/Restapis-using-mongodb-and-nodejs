const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const schema = require('./schema');
const connection = require('../../connection/connection');
function getConnection(callback) {
	connection.connection.then((connection) => callback(null, connection)).catch((error) => callback(error));
}

function addNewArtist(artistData, callback) {
	  getConnection((error, connection) => {
		if(error) {
			console.error(error);
		}else {
				const artistModel = new mongoose.model('artist', schema);    
			    const artist = new artistModel(artistData);
			    console.log(artist);
			    artist.save(callback);
			  }  
	   })		  
}
module.exports = {
	addNewArtist
}