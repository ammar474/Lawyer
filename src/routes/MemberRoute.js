import express from "express";
import { Upload } from "../middleware/multer.js";
import { AddMember , GetMember , GetMemberById } from "../controllers/MemberController.js";

const MemberRoutes = express.Router();
     
MemberRoutes.post(
  "/AddMember",
  Upload.fields([
    { name: "cnicFrontImage", maxCount: 1 },
    { name: "cnicBackImage", maxCount: 1 },
    { name: "professionalDocument", maxCount: 1 },
    { name: "councilIdDocument", maxCount: 1 },
  ]),
  AddMember
);
MemberRoutes.get("/GetMember" , GetMember );

MemberRoutes.get("/GetMemberById/:id" , GetMemberById );



export default MemberRoutes;
