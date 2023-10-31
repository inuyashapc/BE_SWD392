import { subjectRepository } from "../repository/indexRepository.js";

const createNewSubject = async (req, res) => {
  try {
    const { subject_id, subject_name, subject_description, manager_id } =
      req.body;
    const newSubjectData = {
      subject_id,
      subject_name,
      subject_description,
      manager_id,
    };
    const newSubject = await subjectRepository.createNewSubject(newSubjectData);
    res.json(newSubject);
  } catch (error) {
    res.json("not found");
  }
};
const getAllSubject = async (req, res) => {
  try {
    const newSubject = await subjectRepository.getAllSubject();
    res.json(newSubject);
  } catch (error) {
    res.json("not found");
  }
};

const getSubjectbyId = async (req, res) => {
  try {
    const { subject_id } = req.params;
    const getSubjectbyId = await subjectRepository.getSubjectbyId(subject_id);
    res.json(getSubjectbyId);
  } catch (error) {
    res.json("not found");
  }
};
export default { createNewSubject, getAllSubject, getSubjectbyId };
