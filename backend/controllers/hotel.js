import Hotel from '../Schema/hotelSchema.js';
export const createHotel=async(req,res,next)=>{
    const hotel=new Hotel(req.body);
    try {
        const savedHotel=await hotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}
export const updateHotel=async(req,res,next)=>{
    try {
        const udpatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(udpatedHotel);
    } catch (error) {
        next(error);
    }
}
export const deleteHotel=async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json('Hotel Has Been Deleted');

    } catch (error) {
       next(error);
    }
}
export const getHotelById=async(req,res,next)=>{
    try {
       const hotel= await Hotel.findById(req.params.id);
       res.status(200).json(hotel);
    } catch (error) {
        next(error);       
    }
}
export const getAllHotels=async(req,res,next)=>{
    try {
        const hotels=await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
       next(error);
    }
}