import express from "express"
import { AddEditeDetails , GetDetails  , GetDetailsById , ProfileEditeById} from "../controllers/EditProfileController.js";

const ProfileRoute = express.Router();


ProfileRoute.post("/AddEditeDetails" , AddEditeDetails );

ProfileRoute.get("/GetDetails" , GetDetails );

ProfileRoute.get("/GetDetailsById/:id" , GetDetailsById );

ProfileRoute.put("/ProfileEditeById/:id" , ProfileEditeById );



export default  ProfileRoute;