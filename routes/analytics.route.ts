import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrdersAnalytics, getUsersAnalytics } from "../controllers/analytics.controller";
import { updateAccessTOken } from "../controllers/user_controller";
const analyticsRouter=express.Router();

analyticsRouter.get("/get-users-analytics",isAuthenticated,authorizeRoles("admin"), getUsersAnalytics);

analyticsRouter.get("/get-orders-analytics",isAuthenticated,authorizeRoles("admin"), getOrdersAnalytics);

analyticsRouter.get("/get-courses-analytics",isAuthenticated,authorizeRoles("admin"), getCoursesAnalytics);

export default analyticsRouter;