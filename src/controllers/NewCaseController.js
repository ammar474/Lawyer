import { NewCase } from "../models/NewCaseModel.js";
import validateInput from "../helper/ValidateInputs.js";



export const AddNewCase = async (req, res) => {
 
  const {
    caseType,
    caseSubCategory,
    party,
    clientName,
    title,
    caseDescription,
    hearingDate,
    caseNumber,
    firNumber,
    firYear,
    policeStation,
    offence,
    decidedBy,
    decisionDate,
    decisionType,
    outCome,
    shortOrder,
    lawyerId,
   } = req.body;
    
  const error = validateInput(
    [
      "caseType",
      "caseSubCategory",
      "party",
      "clientName",
      "title",
      "caseDescription",
      "hearingDate",
      "caseNumber",
      "firNumber",
      "firYear",
      "policeStation",
      "offence",
      "decidedBy",
      "decisionDate",
      "decisionType",
      "outCome",
      "shortOrder",
      "lawyerId",
      
    ],
    req.body
  );
  console.log(error);
  if (error) {
    return res.status(400).send({ message: "please fill all required field" });
  }
  try {
    let caseDocuments = req.files.map(file => file.path);

    console.log(caseDocuments);
    
    const newCase = new NewCase({
      caseType,
      caseSubCategory,
      party,
      clientName,
      title,
      caseDescription,
      hearingDate,
      caseNumber,
      firNumber,
      firYear,
      policeStation,
      offence,
      decidedBy,
      decisionDate,
      decisionType,
      outCome,
      shortOrder,
      caseDocuments ,
      lawyerId
    });
    const savedCase = await newCase.save();
    return res.status(201).send({ savedCase });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export const GetCase = async (req , res ) => {
    try {
        const Cases = await NewCase.find();
      return  res.status(200).send({Cases});
      } catch (error) {
        return res.status(500).send({ message: error.message });
      }
};

export const GetCaseById = async (req , res) => {
  const lawyerId = req.params.id
  try {
      const caseData = await NewCase.find({lawyerId});
       if (!caseData) {
       return res.status(404).send({ message: 'Case not found' });
       }
     return  res.status(200).send({caseData});
      } catch (error) {
        return  res.status(500).send({ message:error.message });
      }
};

// export const CaseDelete = async (req , res) => {
//     try {
//         const deletedCase = await NewCase.findByIdAndDelete(req.params.id);
//         if (!deletedCase) {
//           return res.status(404).send({ message: 'Case not found' });
//         }
//         return  res.status(200).send({ message: 'Case deleted successfully' });
//       } catch (error) {
//         return  res.status(500).send({ message: error.message});
//       }
// };
