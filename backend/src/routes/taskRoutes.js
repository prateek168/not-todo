import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import {backlogTasks} from "../controllers/backlogController.js"
import {monthlyTasks , dailyTasks} from "../controllers/taskController.js"
const router = new express.Router();

router.route('/daily-tasks').post(isAuthenticated, dailyTasks)
router.route('/monthly-tasks').post(isAuthenticated, monthlyTasks)
router.route('/backlog-tasks').post(isAuthenticated , backlogTasks)


export default router