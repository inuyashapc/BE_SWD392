import { classRepository } from "../repository/indexRepository.js";

const createNewClass = async (req, res) => {
  try {
    const { class_id, subject_id, teacher_id, semester_id } = req.body;
    const newClassData = {
      class_id,
      subject_id,
      teacher_id,
      semester_id,
    };
    const newSemester = await classRepository.createNewClass(newClassData);
    res.json(newSemester);
  } catch (error) {
    res.json("not found");
  }
};

export default { createNewClass };
