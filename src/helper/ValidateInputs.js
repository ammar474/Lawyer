const validateInput = (requiredFields, reqBody) => {
  const missingFields = requiredFields.filter((field) => !reqBody[field]);
  console.log(missingFields);
if (missingFields.length > 0) {
    return `Missing fields: ${missingFields.join(", ")}`;
  }
  return null;
};
export default validateInput;
