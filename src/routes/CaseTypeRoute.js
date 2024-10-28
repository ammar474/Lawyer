import express from "express"
import { AddCaseType } from "../controllers/AddCaseTypeController.js"

const addCaseType = express.Router()

addCaseType.post("/" ,  AddCaseType);

export default addCaseType ;