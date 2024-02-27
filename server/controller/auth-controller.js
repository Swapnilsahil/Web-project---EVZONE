const User=require('../modals/schema');
const Address = require('../modals/addSchema');
const Battery=require('../modals/batschema');
const bcrypt=require("bcrypt");




const register=async (req,res)=>{
    try{
        const {firstName,lastName,email,contact,password}=req.body;

        const userExist=await User.findOne({email: email});

        if(userExist){
            return res.status(400).json({msg:"email already exist"});
        }

        //hash the password
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password,saltRound);

        const userCreated=await User.create({firstName,lastName,email,contact,password});

        res.status(201).json({
            msg:"registration successful",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString(),
        });
    }
    catch(error){
        res.status(500).json("internal server error");
    }
}

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const userExist= await User.findOne({email});

        if(!userExist){
            return res.status(400).json({msg:"invalid credentials"});
        }

        const user=await bcrypt.compare(password,userExist.password);
        
        if(user){
            res.status(200).json({
                msg:"login successful",
                token:await userExist.generateToken(),
                userId:userExist._id.toString(),
            });
        }
        else{
            res.status(401).json({msg:"invalid email or paasword"});
        }
    }
    catch(error){
        
        res.status(500).json("internal server error");
        console.log(error);
    }
}
 

// Function to save address details
const saveAddress = async (req, res) => {
    try {
        const { fullName, address, city, pinCode } = req.body;

        // Create a new Address document
        const newAddress=await Address.create({fullName,address,city,pinCode});
        res.status(201).json({
            msg:"Address saved successful",
            token:await newAddress.generateToken(),
            userId:newAddress._id.toString(),
        });
        
    } catch (error) {
        console.error('Error saving address:', error);
        res.status(500).json({ message: 'Failed to save address' });
    }
};

//function for battery
const swapBattery = async (req, res) => {
    try {
        const { fullName, email,phone ,vehicle_make,vehicle_model,message} = req.body;

        // Create a new battery document
        const newBattery=await Battery.create({fullName, email,phone ,vehicle_make,vehicle_model,message});
        res.status(201).json({
            msg:"information saved successful",
            token:await newBattery.generateToken(),
            userId:newBattery._id.toString(),
        });
        
    } catch (error) {
        console.error('Error saving information:', error);
        res.status(500).json({ message: 'Failed to save information' });
    }
};


module.exports={register,login,saveAddress,swapBattery};