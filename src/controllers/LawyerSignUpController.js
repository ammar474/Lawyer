import { Lawyer } from "../models/LawyerSignUpModel.js";
import bcrypt from "bcrypt";
import validateInput from "../helper/ValidateInputs.js";


export const LawyerSignUp = async (req, res) => {
  try {
    const { fullName, email, password , phone, cnic, barCouncilId, role } = req.body;
    const error = validateInput(
      ["fullName", "email", "password" , "phone", "cnic", "barCouncilId", "role"],
      req.body
    );
    if (error) {
      return res
        .status(400)
        .send({ message: "please fill all require fields" });
    }
    if (
      !req.files ||
      !req.files.cnicFrontImage ||
      !req.files.cnicBackImage ||
      !req.files.barCouncilImage
    ) {
      return res.status(400).send({ error: "All images are required" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const NewLawyer = new Lawyer({
      fullName,
      email,
      password : hashedPassword,
      phone,
      cnic,
      barCouncilId,
      role,
      cnicFrontImage: req.files.cnicFrontImage[0].path,
      cnicBackImage: req.files.cnicBackImage[0].path,
      barCouncilImage: req.files.barCouncilImage[0].path,
    });

    const newLawyer = await NewLawyer.save();
    if (newLawyer) {
      return res.status(201).send({ message: "Sign-up successful", newLawyer });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({
        error: "Duplicate entry. Email, CNIC or Bar Council ID already exists",
      });
    }
    return res.status(500).send({ message: error.message });
  }
};

export const GetUser = async (req, res) => {
  console.log(req.data.role);
  
  try {
    const signups = await SignUp.find();
    return res.status(200).send({ signups });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const GetUserById = async (req, res) => {
  try {
    const signup = await SignUp.findById(req.params.id);

    if (!signup) {
      return res.status(404).send({ message: "user not found" });
    }

    return res.status(200).send(signup);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
 
