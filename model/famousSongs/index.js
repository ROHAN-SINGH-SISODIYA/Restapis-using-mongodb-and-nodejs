const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const connection = require('../../connection/connection');
function getConnection(callback) {
	connection.connection.then((connection) => callback(null, connection)).catch((error) => callback(error));
}
function findFamousArtist(callback) {
	  getConnection((error, connection) => {
		if(error) {
			console.error(error);
		}else {
				   connection.connection.collection('artists').aggregate([
					 {$match: {is_famous: "yes"}},
					 {$lookup: {
					   from: "songs",
					   localField: "firstName",
					   foreignField: "artist",
					   as: "songs"
					 }}
					]).toArray((err, data) => {
			           if(data && data.length>0){
			              return callback({data});
			           }else{
			             return callback("No famous artist!");
			           }
			      });
			  }  
	   })		  
}
module.exports = {
	findFamousArtist
}


