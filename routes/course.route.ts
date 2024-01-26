import express from 'express';
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, generateVideoUrl, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from '../controllers/course.controller';
import { authorizeRoles, isAuthenticated } from '../middleware/auth';
import { updateAccessTOken } from '../controllers/user_controller';
const courseRouter=express.Router();

courseRouter.post(
    "/create-course",
    updateAccessTOken,
    isAuthenticated,
    authorizeRoles("admin"), 
    uploadCourse
);

courseRouter.put(
    "/edit-course/:id",
    isAuthenticated,
    authorizeRoles("admin"), 
    editCourse
);

courseRouter.get(
    "/get-course/:id",
    getSingleCourse
);

courseRouter.get(
    "/get-courses",
    getAllCourses
);

courseRouter.get(
    "/get-course-content/:id",
    isAuthenticated,
    getCourseByUser
);

courseRouter.put(
    "/add-question",
    isAuthenticated,
    addQuestion
);

courseRouter.put(
    "/add-answer",
    isAuthenticated,
    addAnswer
);

courseRouter.put(
    "/add-review/:id",
    isAuthenticated,
    addReview
);

courseRouter.put(
    "/add-reply",
    isAuthenticated,
    authorizeRoles("admin"),
    addReplyToReview,
);

courseRouter.put(
    "/get-courses",
    isAuthenticated,
    authorizeRoles("admin"),
    getAllCourses,
);

courseRouter.post(
    "/getVdoCipherOTP",
    generateVideoUrl,
);

courseRouter.delete(
    "/delete-course/:id",
    isAuthenticated,
    authorizeRoles("admin"),
    deleteCourse,
)


export default courseRouter;