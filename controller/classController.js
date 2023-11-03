import { classRepository } from "../repository/indexRepository.js";

const createNewClass = async (req, res) => {
  try {
    const { class_name, subject_id, teacher_id, semester_id } = req.body;
    const newClassData = {
      class_name,
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

const getAllClass = async (req, res) => {
  try {
    const result = await classRepository.getAllClass();
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};

const getClassDetail = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ========= id:", id);
  try {
    const result = await classRepository.getClassDetail(id);
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};

const updateClass = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  console.log("🚀 ========= updateData:", updateData);
  console.log("🚀 ========= id:", id);
  try {
    const result = await classRepository.updateClass(id, updateData);
    res.json(result);
  } catch (error) {
    res.json(error.toString());
  }
};

const changeStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await classRepository.changeStatus(id);
    res.json(result);
  } catch (error) {
    res.json(error.toString());
  }
};
export default {
  createNewClass,
  getAllClass,
  getClassDetail,
  updateClass,
  changeStatus,
};
