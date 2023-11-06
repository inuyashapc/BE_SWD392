import { issueRepository } from "../repository/IndexRepository.js";

const createNewIssue = async (req, res) => {
  try {
    const {
      project_id,
      issue_id,
      assigner_id,
      assignee_id,
      issue_title,
      issue_description,
      start_date,
      end_date,
      setting_id,
    } = req.body;
    const newIssueData = {
      project_id,
      issue_id,
      assigner_id,
      assignee_id,
      issue_title,
      issue_description,
      start_date,
      end_date,
      setting_id,
    };
    const newIssue = await issueRepository.createNewIssue(newIssueData);
    res.json(newIssue);
  } catch (error) {
    res.json("not found");
  }
};

const getAllIssue = async (req, res) => {
  try {
    const allIssues = await issueRepository.getAllIssue();
    res.json(allIssues);
  } catch (error) {
    res.json("not found");
  }
};

const getIssueById = async (req, res) => {
  try {
    const issueId = req.params.issueId;
    const issue = await issueRepository.getIssueById(issueId);

    if (issue) {
      res.json(issue);
    } else {
      res.status(404).json("Issue not found");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

const batchUpdate = async (req, res) => {
  try {
    const updates = req.body;

    const updatedIssues = await Promise.all(
      updates.map(async (update) => {
        const { issueId, updatedData } = update;
        const issue = await issueRepository.getIssueById(issueId);

        if (!issue) {
          throw new Error(`Issue with ID ${issueId} not found`);
        }

        const updatedIssue = await issueRepository.updateIssue(
          issueId,
          updatedData
        );

        return updatedIssue;
      })
    );

    res.json(updatedIssues);
  } catch (error) {
    res.status(500).json("Internal Server Error: " + error.message);
  }
};

export default { createNewIssue, getAllIssue, getIssueById, batchUpdate };
