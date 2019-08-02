const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const schema = require('./schema')
const connection = require('../../connection/connection');

function getConnection(callback) {
	connection.connection.then((connection) => callback(null, connection)).catch((error) => callback(error));
}

function addNewSong(songData, callback) {
	 getConnection((error, connection) => {
		if(error) {
			console.error(error);
		}else {
				const songModel = new mongoose.model('song', schema);    
			    const song = new songModel(songData);
			    song.save(callback);
			  }
	    });		    
}
module.exports = {
	addNewSong
}