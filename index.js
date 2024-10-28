import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import NewCaseRouter from "./src/routes/NewCaseRoute.js";
import CaseProceedingRouter from "./src/routes/CaseProceedingRoute.js";
import MemberRoutes from "./src/routes/MemberRoute.js";
import LawyerSignUpRoutes from "./src/routes/LawyerSignUpRoute.js";
import ProfileRoute from "./src/routes/EditeProfileRoute.js";
import LoginRoutes from "./src/routes/LoginRoute.js";

const app = express();
dotenv.config();
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/Case", NewCaseRouter);
app.use("/Proceeding", CaseProceedingRouter);
app.use("/Member", MemberRoutes);
app.use("/SignUp", LawyerSignUpRoutes);
app.use("/Profile", ProfileRoute);
app.use("/Login", LoginRoutes);
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);

const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log(`data base connected`);
    app.listen(PORT, () => {
      console.log(`server is runnung on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
