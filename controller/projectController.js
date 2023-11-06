import { projectRepository } from "../repository/IndexRepository.js";

const getAllProject = async (req, res) => {
  try {
    const projects = await projectRepository.getAllProject();
    return res.json(projects);
  } catch (error) {
    console.log(
      "🚀 ~ file: projectController.js:6 ~ getAllProject ~ error:",
      error
    );
  }
};
export default { getAllProject };
