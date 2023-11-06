import { assignmentRepository } from "../repository/IndexRepository.js";

const createNewAssignment = async (req, res) => {
  try {
    const { subject_id, assignment_name, assignment_description, due_date } =
      req.body;
    const newAssignmentData = {
      subject_id,
      assignment_name,
      assignment_description,
      due_date,
    };
    const newSemester = await assignmentRepository.createNewAssignment(
      newAssignmentData
    );
    res.json(newSemester);
  } catch (error) {
    res.json("not found");
  }
};

export default { createNewAssignment };
