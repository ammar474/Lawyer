import { Lawyer } from "../models/LawyerSignUpModel.js";
import { Member } from "../models/MemberModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const lawyer = await Lawyer.findOne({ email });
    if (lawyer) {
      const isMatch = await bcrypt.compare(password, lawyer.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Invalid credentials." });
      }

      const token = jwt.sign(
        { userId: lawyer._id, role: "lawyer" },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.status(200).send({
        message: "Lawyer login successful",
        token,
        lawyer: { id: lawyer._id, name: lawyer.name, role: "lawyer" },
      });
    }

    const member = await Member.findOne({ email });
    if (member) {
      const isMatch = await bcrypt.compare(password, member.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Invalid credentials." });
      }

      const token = jwt.sign(
        { userId: member._id, role: member.role },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.status(200).send({
        message: `${member.role} login successful`,
        token,
        member: { id: member._id, name: member.name, role: member.role },
      });
    }

    return res.status(404).send({ message: "Lawyer or member  not found." });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
