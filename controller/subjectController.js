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

export default { createNewSubject };
