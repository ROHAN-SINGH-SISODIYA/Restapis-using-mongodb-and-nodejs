const router = require('express').Router();

const userController = require('../controller/Controller');

router.get('/', function (req, res) {
    res.json({
        status: 'RESTAPI',
        message: 'Company Task',
    });
});

router.route('/newUser').post(userController.createNewUser);
router.route('/newSong').post(userController.addSong);
router.route('/newArtist').post(userController.addArtist);
router.route('/famousSongs').get(userController.SearchfamousArtist);
router.route('/addComment').post(userController.addNewComment);

module.exports = router;

