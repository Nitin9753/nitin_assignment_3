const express = require('express');
const { registerUser, getUser, deleteUser, editUser } = require('../controllers/userController');
const router = express.Router();
router.post('/create-user', registerUser);
router.get('/all-user', getUser);
router.delete('/delete-user/:id', deleteUser);
router.put('/edit-user/:id', editUser);
module.exports = router;