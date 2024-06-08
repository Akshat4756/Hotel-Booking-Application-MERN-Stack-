import User from "../Schema/userSchema.js"

export const register=async(req,res,next)=>{
    try {
        const newUser=new User({
            fullname:req.body.fullname,
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            mobile:req.body.mobile,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            image:req.body.image
        });
const savedUser=await newUser.save();
if(savedUser!=null){
    res.status(200).json("User has been added");
}

    } catch (error) {
        next(error);
    }
}

export const deleteuser=async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('user has been deleted')
    } catch (error) {
        next(error);
    }
}