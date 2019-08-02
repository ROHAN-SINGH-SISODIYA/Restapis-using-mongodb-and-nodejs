const UserModel = require('../model/user/');
const ArtistModel = require('../model/artist/');
const SongModel = require('../model/song/');
const famousArtistModel = require('../model/famousSongs/');
const commentModel = require('../model/comment/');
const errorMessage = 'Failed to process request';
const successMessage = 'success';

function createNewUser(req, res) {
    const user = req.body;
    console.log(user);
    UserModel.addUser(user, function(error) {
        if(error) {
            res.status(500).send({message : errorMessage});
        }else {
            res.status(200).send({message: successMessage});
        }
    });
};


function addArtist(req, res) {
    const artist = req.body;
    console.log(artist);
    ArtistModel.addNewArtist(artist, function(error) {
        if(error) {
            res.status(500).send({message : errorMessage});
        }else {
            res.status(200).send({message: successMessage});
        }
    });
};


function addSong(req, res) {
    const song = req.body;
    console.log(song);
    SongModel.addNewSong(song, function(error) {
        if(error) {
            res.status(500).send({message : errorMessage});
        }else {
            res.status(200).send({message: successMessage});
        }
    });
};

function SearchfamousArtist(req, res) {
    famousArtistModel.findFamousArtist(function(error) {
        if(error) {
            res.status(200).send({'Famous Artists': error});
        }else {
            res.status(200).send({'Famous Artists and Songs': data});
        }
    });
};


function addNewComment(req, res) {
    const comment = req.body;
    commentModel.NewComment(comment,function(error) {
        if(error) {
            res.status(500).send({message :"Already Commented"});
        }else {
            res.status(200).send({message: successMessage});
        }
    });
};

module.exports = {
    addArtist,
    addSong,
    createNewUser,
    SearchfamousArtist,
    addNewComment
}