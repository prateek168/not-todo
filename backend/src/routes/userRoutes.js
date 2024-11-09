import express from 'express'
import {getAllUser, userLogin , userLogout , userRegister } from '../controllers/userController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js'
const router = express.Router();

router.route('/register').post(userRegister)
router.route('/login').post(userLogin)
router.route('/logout').post(userLogout)
router.route('/allusers').get(isAuthenticated , getAllUser)

export default router;