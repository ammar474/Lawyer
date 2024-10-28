import { CaseProceeding } from "../models/CaseProceedingModel.js";
import validateInput from "../helper/ValidateInputs.js";

export const AddCaseProceeding = async (req, res) => {
  const { caseId, nextHearing, caseConcluded, orderOfTheDay, status } =
    req.body;
  const error = validateInput(
    ["caseId", "nextHearing", "caseConcluded", "orderOfTheDay", "status"],
    req.body
  );
  if (error) {
    return res.status(400).send({ message: "please fill all require fields" });
  }
  try {
    const attachments = req.files.map((file) => file.path);
    const proceeding = new CaseProceeding({
      caseId,
      nextHearing,
      caseConcluded,
      orderOfTheDay,
      attachments,
      status,
    });

    const newProceeding = await proceeding.save();
    return res.status(201).send({ newProceeding });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const GetCaseProceeding = async (req, res) => {
  try {
    const proceedings = await CaseProceeding.find({
      caseId: req.params.caseId,
    });
    if (!proceedings) {
      return res
        .status(404)
        .send({ message: "No proceedings found for this case" });
    }
    return res.status(200).send(proceedings);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};




