// models/job.ts

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IJob extends Document {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  industry: string;
  location: string;
  jobTitle: string;
  jobDescription: string;
  employmentType: string;
  skillsQualifications: string;
  compensationBenefits: string;
  applicationProcess: string;
  applicationDeadline: Date;
}

const jobSchema: Schema<IJob> = new mongoose.Schema({
  contactName: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    required: false,
  },
  companyName: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
  skillsQualifications: {
    type: String,
    required: true,
  },
  compensationBenefits: {
    type: String,
    required: false,
  },
  applicationProcess: {
    type: String,
    required: false,
  },
  applicationDeadline: {
    type: Date,
    required: true,
  },
});

const JobPost: Model<IJob> = mongoose.model<IJob>('Job', jobSchema);

export default JobPost;
