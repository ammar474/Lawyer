import express from "express"
import { Upload } from "../middleware/multer.js"
import { AddCaseProceeding , GetCaseProceeding } from "../controllers/CaseProceedingController.js";
 
const CaseProceedingRouter = express.Router();

CaseProceedingRouter.post("/CaseProceeding" , Upload.array("files") , AddCaseProceeding );

CaseProceedingRouter.get("/GetCaseProceeding/:caseId" , GetCaseProceeding );

export default CaseProceedingRouter;