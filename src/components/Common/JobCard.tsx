import { JobCardProps } from '@/shared/constants/types'
import React from 'react'

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="rounded-lg  bg-amber-300 p-6 shadow-lg">
      <h2 className="text-xl  font-semibold">{job.title}</h2>
      <p className="text-xl font-bold text-gray-600">{job.company}</p>
      <p className="text-xl font-bold text-gray-600">{job.location}</p>
      <p className="mt-4 text-xl text-gray-700">{job.description}</p>
      <p className="mt-2 text-gray-700">Requirements: {job.requirements}</p>
      <p className="mt-2 font-semibold text-gray-700">Salary: {job.salary}</p>
      <p className="mt-2 text-gray-700">
        Created at: {new Date(job.createdAt).toLocaleDateString()}
      </p>
      <p className="mt-2 text-gray-700">
        Updated at: {new Date(job.updatedAt).toLocaleDateString()}
      </p>
    </div>
  )
}

export default JobCard
