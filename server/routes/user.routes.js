import Router from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();


// Get all users
router.route('/users').get(UserController.getUsers);


// Get one user
router.route('/users/:id').get(UserController.getUser);


// Add user
router.route('/users').post(UserController.addUser);


export default router;
