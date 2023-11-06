import { subjectRepository } from "../repository/IndexRepository.js";

const createNewSubject = async (req, res) => {
  try {
    const {
      subject_code,
      subject_name,
      subject_description,
      manager_id,
      isActived = 1,
    } = req.body;
    const newSubjectData = {
      subject_code,
      subject_name,
      subject_description,
      manager_id,
      isActived,
    };
    const newSubject = await subjectRepository.createNewSubject(newSubjectData);
    res.json(newSubject);
  } catch (error) {
    res.json("not found");
  }
};
const getAllSubject = async (req, res) => {
  try {
    const { sortColumn = "subject_id", sortOrder = "asc" } = req.query;
    const newSubject = await subjectRepository.getAllSubject(
      sortColumn,
      sortOrder
    );
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
const changeActiveSubject = async (req, res) => {
  try {
    const { subject_id } = req.body;
    const { sortColumn, sortOrder } = req.query;
    const changeActiveSubject = await subjectRepository.changeActiveSubject(
      sortColumn,
      sortOrder,
      subject_id
    );
    res.json(changeActiveSubject);
  } catch (error) {
    res.json("not found");
  }
};
const softDeleteSubject = async (req, res) => {
  try {
    const { subject_id } = req.params;
    const { sortColumn, sortOrder } = req.query;
    const softDeleteSubject = await subjectRepository.softDeleteSubject(
      sortColumn,
      sortOrder,
      subject_id
    );
    res.json(softDeleteSubject);
  } catch (error) {
    res.json("not found");
  }
};
const updateSubject = async (req, res) => {
  try {
    const {
      subject_id,
      subject_code,
      subject_name,
      subject_description,
      manager_id,
      isActived,
    } = req.body;
    const updateSubject = await subjectRepository.updatedSubject({
      subject_id,
      subject_code,
      subject_name,
      subject_description,
      manager_id,
      isActived,
    });
    res.json(updateSubject);
  } catch (error) {
    res.json("not found");
  }
};
const getAllSubjects = async (req, res) => {
  try {
    const newSubject = await subjectRepository.getAllSubjects();
    console.log("🚀 ========= newSubject:", newSubject);
    res.json(newSubject);
  } catch (error) {
    res.json("not found");
  }
};
export default {
  createNewSubject,
  getAllSubject,
  getSubjectbyId,
  changeActiveSubject,
  softDeleteSubject,
  updateSubject,
  getAllSubjects,
};
