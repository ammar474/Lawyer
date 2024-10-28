import express from "express";
import { Upload } from "../middleware/multer.js";
import { AddNewCase , GetCase , GetCaseById } from "../controllers/NewCaseController.js";

const NewCaseRouter = express.Router()
  
NewCaseRouter.post('/NewCase' ,  Upload.array("files" , 5)  ,  AddNewCase  ); 

NewCaseRouter.get('/GetCase' , GetCase  );

NewCaseRouter.get('/GetCaseById/:id' , GetCaseById);




export default NewCaseRouter;