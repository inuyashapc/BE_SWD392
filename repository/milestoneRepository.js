import { Milestone } from "../model/indexModel.js";

const getAllMilestone = async () => {
  try {
    const result = await Milestone.findAll();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createMilestone = async () => {
  try {
    const result = await Milestone.create();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  getAllMilestone,
};
