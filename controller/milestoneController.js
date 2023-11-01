import { milestoneRepository } from "../repository/indexRepository.js";

const getAllMilestone = async (req, res) => {
  try {
    const result = await milestoneRepository.getAllMilestone();
    res.json(result);
  } catch (error) {
    res.json("not found");
  }
};
export default { getAllMilestone };
