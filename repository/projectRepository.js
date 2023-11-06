import { Project } from "../model/IndexModel.js";

const getAllProject = async () => {
  try {
    const projects = await Project.findAll();
    return projects;
  } catch (error) {
    console.log(
      "🚀 ~ file: projectRepository.js:7 ~ getAllProject ~ error:",
      error
    );
  }
};

export default { getAllProject };
