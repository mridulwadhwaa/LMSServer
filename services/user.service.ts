import userModel from "../models/user_model";
import { Response } from "express";
import { redis } from "../utils/redis";
//get user by id
export const getUserById=async(id:string, res:Response)=>
{
    const userJson=await redis.get(id);

    if(userJson)
    {
        const user=JSON.parse(userJson);
        res.status(201).json({
            success:true,
            user,
    });
}
};

//get all users
export const getAllUsersService=async(res:Response)=>{
    const users= await userModel.find().sort({createdAt:-1}); //to reverse the sequence i.e. latest on top

    res.status(201).json({
        success:true,
        users,
    });
}

//update user role --only admin
export const updateUserRoleService=async(res:Response,id:string,role:string)=>{

    const user = await userModel.findByIdAndUpdate( id, { role },{ new:true });

    res.status(201).json({
        success:true,
        user,
    });
}