import express from "express";
import { Upload } from "../middleware/multer.js";
import { LawyerSignUp , GetUser  , GetUserById } from "../controllers/LawyerSignUpController.js";
import Authentication from "../middleware/Authentication.js";
const LawyerSignUpRoutes = express.Router();

LawyerSignUpRoutes.post(
  "/",
  Upload.fields([
    { name: "cnicFrontImage", maxCount: 1 },
    { name: "cnicBackImage", maxCount: 1 },
    { name: "barCouncilImage", maxCount: 1 },
  ]),
  LawyerSignUp
  );
  
  LawyerSignUpRoutes.get( "/GetUser" , Authentication , GetUser);

  LawyerSignUpRoutes.get( "/GetUserById/:id" , GetUserById);


  

export default LawyerSignUpRoutes;
