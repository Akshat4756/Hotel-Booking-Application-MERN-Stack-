import express from 'express';
const Router=express.Router();

import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from '../controllers/hotel.js';

//create 
Router.post('/AddHotel',createHotel)
//update
Router.put('/UpdateHotel/:id',updateHotel)
//delete
Router.delete('/DeleteHotel/:id',deleteHotel)
//get by id
Router.get("/GetHotel/:id",getHotelById)
//get All
Router.get("/",getAllHotels)

export default Router;