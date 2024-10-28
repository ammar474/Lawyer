import { Member } from "../models/MemberModel.js";
import bcrypt from "bcrypt";
import validateInput from "../helper/ValidateInputs.js";

export const AddMember = async (req, res) => {
  const { name, email, password, phone, address, role, lawyerId } = req.body;
  const error = validateInput(
    ["name", "email", "password", "phone", "address", "role" , "lawyerId"],
    req.body
  );
  if (error) {
    return res.status(400).send({ message: "please fill all require fields" });
  }
  if (
    !req.files ||
    !req.files.cnicFrontImage ||
    !req.files.cnicBackImage ||
    !req.files.professionalDocument ||
    !req.files.councilIdDocument
  ) {
    return res
      .status(400)
      .send({ message: "please add all require documents" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const NewMember = new Member({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role,
      lawyerId,
      cnicFrontImage: req.files.cnicFrontImage[0].path,
      cnicBackImage: req.files.cnicBackImage[0].path,
      professionalDocument: req.files.professionalDocument[0].path,
      councilIdDocument: req.files.councilIdDocument[0].path,
    });

    const newMember = await NewMember.save();
    if (newMember) {
      return res
        .status(201)
        .send({ message: "Member created successfully", newMember });
    }
    return res.status(400).send({ message: "Member not created " });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({ error: "Email already exists" });
    }
  return  res.status(500).send({ message: error.message });
  }
};

export const GetMember = async (req, res) => {
  try {
    const members = await Member.find();
    return res.status(200).send({ members });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const GetMemberById = async (req, res) => {
  const lawyerId = req.params.id
  try {
    const member = await Member.find({lawyerId});

    if (!member) {
      return res.status(404).send({ message: "Member not found" });
    }
    return res.status(200).send(member);
  } catch (error) {
    return res.status(500).send({ error: "Failed to fetch member" });
  }
};
