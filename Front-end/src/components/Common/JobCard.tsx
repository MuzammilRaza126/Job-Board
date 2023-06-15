import { JobCardProps } from '@/shared/constants/types'
import React from 'react'

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="max-w-3xl rounded-lg bg-amber-300 p-6 text-xl font-medium shadow-lg">
    <h2 className="text-xl font-semibold text-gray-600">
      Job Title:
      <br />
      <p className="font-normal text-white">{job.jobTitle}</p>
    </h2>
    <h2 className="text-xl font-semibold text-gray-600">
      Company:
      <br />
      <p className="font-normal text-white">{job.companyName}</p>
    </h2>
    <h2 className="text-xl font-semibold text-gray-600">
      Job Location:
      <br />
      <p className="font-normal text-white">{job.location}</p>
    </h2>
    <h2 className="mt-4 text-xl font-semibold text-gray-600">
      Job Description:
      <br />
      <p className="font-normal text-white">{job.jobDescription}</p>
    </h2>
    <h2 className="mt-2 font-semibold text-gray-600">
      Employment Type:
      <br />
      <p className="font-normal text-white">{job.employmentType}</p>
    </h2>
    <h2 className="mt-2 font-semibold text-gray-600">
      Skills & Qualifications:
      <br />
      <p className="font-normal text-white">{job.skillsQualifications}</p>
    </h2>
    <h2 className="mt-2 font-semibold text-gray-600">
      Compensation & Benefits:
      <br />
      <p className="font-normal text-white">{job.compensationBenefits}</p>
    </h2>
    <h2 className="mt-2 font-semibold text-gray-600">
      Application Process:
      <br />
      <p className="font-normal text-white">{job.applicationProcess}</p>
    </h2>
    <h2 className="mt-2 font-semibold text-gray-600">
      Application Deadline:
      <br />
      <p className="font-normal text-white">{job.applicationDeadline}</p>
    </h2>
  </div>
  )
}

export default JobCard
