import Issue from '../model/IssueModel.js'

const createNewIssue = async (newIssueData) => {
  try {
    const newIssue = await Issue.create(newIssueData);
    return newIssue;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

const getAllIssue = async () => {
  try {
    const allIssue = await Issue.findAll();
    return allIssue;
  } catch (error) {
    throw new Error(error.message);
  }
}

const getIssueById = async (issueId) => {
  try {
      const issue = await Issue.findOne(issueId);
      if (!issue) {
          throw new Error(`Issue with ID ${issueId} not found`);
      }
      return issue;
  } catch (error) {
      throw new Error("Unable to fetch issue: " + error.message);
  }
};


const oldbatchUpdate = async (updates) => {
  try {
    const updatedIssues = await Promise.all(updates.map(async (update) => {
      const { issueId, updatedData } = update;
      const issue = await Issue.findByPk(issueId);

      if (!issue) {
        throw new Error(`Issue with ID ${issueId} not found`);
      }

      await issue.update(updatedData);

      return issue;
    }));

    return updatedIssues;
  } catch (error) {
    throw new Error("Unable to batch update issues: " + error.message);
  }
};

const batchUpdate = async (updates) => {
  try {
    const updatedItems = await Promise.all(updates.map(async (update) => {
      const { itemId, updatedData } = update;
      const item = await Item.findByPk(itemId);

      if (!item) {
        throw new Error(`Item with ID ${itemId} not found`);
      }

      await item.update(updatedData);

      console.log(
        "🚀 ~ file: itemRepository.js ~ batchUpdate ~ item:",
        item
      );

      return item;
    }));

    return updatedItems;
  } catch (error) {
    throw new Error("Unable to batch update items: " + error.message);
  }
};


export default {
  createNewIssue,
  getAllIssue,
  getIssueById,
  batchUpdate
};