const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const schema = require('./schema')
const connection = require('../../connection/connection');
function getConnection(callback) {
	connection.connection.then((connection) => callback(null, connection)).catch((error) => callback(error));
}

function addUser(userData, callback) {
	 getConnection((error, connection) => {
		if(error) {
			console.error(error);
		}else {
				const userModel = new mongoose.model('user', schema);    
			    const user = new userModel(userData);
			    console.log(user);
			    user.save(callback);
			  }  
	    });		  
}

module.exports = {
	addUser
}