import express from 'express'
const Router=express.Router();
import { deleteuser, register } from '../controllers/user.js';

Router.post('/AddUser',register);
// Router.get('/',);
// Router.put('/UpdateUser/:id',);
Router.delete('/DeleteUser/:id',deleteuser);
// Router.get('/getUser/:id')

export default Router;