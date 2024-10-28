import express from "express";
import { Upload } from "../middleware/multer.js";
import { AddNewCase , GetCase , GetCaseById } from "../controllers/NewCaseController.js";
import AuthorizeRoles from "../middleware/AuthorizeRoles.js";
import Authentication from "../middleware/Authentication.js"
const NewCaseRouter = express.Router()
  
NewCaseRouter.post('/NewCase' , Authentication , AuthorizeRoles("lawyer") , Upload.array("files" , 5)  , AddNewCase  ); 

NewCaseRouter.get('/GetCase' , GetCase  );    

NewCaseRouter.get('/GetCaseById/:id' , GetCaseById);




export default NewCaseRouter;