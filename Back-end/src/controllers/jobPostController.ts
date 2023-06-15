// controllers/jobController.ts

import { Request, Response } from 'express';
import JobPost, { IJob } from '../models/JobPost';

export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobData: IJob = req.body;
    const job: IJob = new JobPost(jobData);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: 'Internal server error' });
  }
};

export const updateJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobId: string = req.params.id;
    const jobData: IJob = req.body;
    const job: IJob | null = await JobPost.findByIdAndUpdate(jobId, jobData, {
      new: true,
      runValidators: true,
    });
    if (!job) {
      res.status(404).json({ error: 'Job not found' });
      return;
    }
    res.json(job);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
