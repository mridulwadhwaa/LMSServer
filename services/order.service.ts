import { NextFunction, Response} from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/orderModel";

//create new order
export const newOrder=CatchAsyncError(async(data:any,res:Response)=>
{
    const order=await OrderModel.create(data);
    res.status(201).json({
        success:true,
        order,
    })
})

//get all orders
export const getAllOrdersService=async(res:Response)=>{
    const users= await OrderModel.find().sort({createdAt:-1}); //to reverse the sequence i.e. latest on top

    res.status(201).json({
        success:true,
        users,
    });
}