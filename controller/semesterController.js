import { semesterRepository } from "../repository/indexRepository.js";

const getAllSemester = async (req, res) => {
  try {
    const result = await semesterRepository.getAllSemester();
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};
export default { getAllSemester };
