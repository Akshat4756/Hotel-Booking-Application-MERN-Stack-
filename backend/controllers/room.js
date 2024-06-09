import Room from '../Schema/roomSchema';
import Hotel from '../Schema/hotelSchema';
 
export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);
    try {
        const savedRoom=await newRoom.save();
        try {
            await Hotel.findbyIdAndUpdate(hotelId,{
                $push:{rooms:savedRoom._id}
            });
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error);
    }
}