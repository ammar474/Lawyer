import { Profile } from "../models/EditProfileModel.js";
import validateInput from "../helper/ValidateInputs.js";

export const AddEditeDetails = async (req, res) => {
  try {
    const {
      designation,
      experience,
      qualification,
      station,
      officeAddress,
      areaOfExpertise,
    } = req.body;
    const error = validateInput(
      [
        "designation",
        "experience",
        "qualification",
        "station",
        "officeAddress",
        "areaOfExpertise",
      ],
      req.body
    );
    if (error) {
      return res
        .status(400)
        .send({ message: "please fill all require fields" });
    }

    const NewProfile = new Profile({
      designation,
      experience,
      qualification,
      station,
      officeAddress,
      areaOfExpertise,
    });

    const newProfile = await NewProfile.save();
    if (newProfile) {
      return res
        .status(201)
        .send({ message: "Profile created successfully", newProfile });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const GetDetails = async (req, res) => {
  try {
    const profiles = await Profile.find();
    return res.status(200).send(profiles);
  } catch (error) {
    return res.status(500).send({ error: "Failed to fetch profiles" });
  }
};

export const GetDetailsById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
      return res.status(404).send({ message: "Profile not found" });
    }

    return res.status(200).send(profile);
  } catch (error) {
    return res.status(500).send({ error: "Failed to fetch profile" });
  }
};

export const ProfileEditeById = async (req, res) => {
  try {
    const {
      designation,
      experience,
      qualification,
      station,
      officeAddress,
      areaOfExpertise,
    } = req.body;
    const error = validateInput(
      [
        "designation",
        "experience",
        "qualification",
        "station",
        "officeAddress",
        "areaOfExpertise",
      ],
      req.body
    );
    if (error) {
      return res.status(400).send({ message: "please send all require field" });
    }
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      {
        designation,
        experience,
        qualification,
        station,
        officeAddress,
        areaOfExpertise,
      },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).send({ message: "Profile not found" });
    }

    return res
      .status(200)
      .send({ message: "Profile updated successfully", updatedProfile });
  } catch (error) {
    return res.status(500).send({ message : error.message });
  }
};
