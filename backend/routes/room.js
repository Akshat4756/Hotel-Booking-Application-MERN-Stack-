import express from 'express';
const Router=express.Router();

import { createRoom, deleteRoom, getAllRooms, getRoomById, updateRoom } from '../controllers/room.js';

//create 
Router.post('/AddRoom/:hotelid',createRoom)  //Router.post('/AddRoom',verifyAdmin,createRoom)
//update
Router.put('/UpdateRoom/:id',updateRoom)
//delete
Router.delete('/DeleteRoom/:id/:hotelid',deleteRoom)
//get by id
Router.get("/GetRoom/:id",getRoomById)
//get All
Router.get("/",getAllRooms)

export default Router;