import express from "express"
import { Login } from "../controllers/LoginController.js";

const LoginRoutes = express.Router();

LoginRoutes.post("/" , Login );

export default LoginRoutes;