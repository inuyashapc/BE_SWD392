import { Subject } from "../model/indexModel.js";

const createNewSubject = async (newSubjectData) => {
  try {
     Subject.create(newSubjectData).then((newA) => console.log("new",newA)).catch((err) => console.log('error',err));
    // return newSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getAllSubject = async () =>{
  try {
    const allSubject = await Subject.findAll();
    return allSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
}
const getSubjectbyId = async (subject_id) => {
  try {
    const getSubjectbyId = await Subject.findOne({subject_id});
    return getSubjectbyId;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
}
export default { createNewSubject,getAllSubject ,getSubjectbyId};
