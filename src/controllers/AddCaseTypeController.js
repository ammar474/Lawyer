import { CaseType } from "../models/CaseTypeModel.js";

export const AddCaseType = async (req, res) => {
  try {
    const { typeName, subCategories } = req.body;

    if (!typeName || !subCategories) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const newCaseType = new CaseType({
      typeName,
      subCategories,
    });

    const NewCaseType = await newCaseType.save();
    if (NewCaseType) {
      return res
        .status(201)
        .json({ message: "Case type created successfully", newCaseType });
    }
  } catch (error) {
   return res.status(500).json({ message : error.message});
  }
};
