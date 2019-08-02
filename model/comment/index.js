const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const schema = require('./schema')
const connection = require('../../connection/connection');
function getConnection(callback) {
	connection.connection.then((connection) => callback(null, connection)).catch((error) => callback(error));
}

function NewComment(commentData, callback) {
	  getConnection((error, connection) => {
		if(error) {
			console.error(error);
		}else {
			   // console.log(commentData); 
				const commentModel = new mongoose.model('comments', schema);    
			    const comments = new commentModel(commentData);
			    //console.log(comments);
			    commentModel.find({"UserID" : comments.UserID,
				"SongID" : comments.SongID}).countDocuments(function (err, count) {
						if (err){
				               return callback({err});
			           		   console.log(count);

						}else if(count==0){
								console.log("save");
								comments.save(callback);
						}else{
			           		console.log(count);
							return callback("already");
						}
					});
			  }  
	   })		  
}
module.exports = {
	NewComment
}