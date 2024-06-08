import express from 'express'
import { verifyUser } from "../utilities/verifyToken.js";
const Router=express.Router();
import { deleteuser, getAllUser, login, register, updateUser } from '../controllers/user.js';

Router.post('/AddUser',register);
Router.get('/',getAllUser);
Router.put('/UpdateUser/:id',verifyUser,updateUser);
Router.delete('/DeleteUser/:id',verifyUser,deleteuser);
Router.get('/Login',login);
// Router.get('/getUser/:id')

export default Router;