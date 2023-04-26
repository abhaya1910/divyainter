const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/getAllUserDetails', userController.getAllUsers);
router.post('/addUser', userController.addUser);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/getMovieList', userController.getMovieList);


module.exports = router;