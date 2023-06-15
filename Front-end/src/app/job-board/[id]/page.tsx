'use client'
import { useRouter } from 'next/router'
import { jobs } from '@/shared/constants/jobs'
import Layout from '@/components/Layout/Layout'
import JobCard from '@/components/Common/JobCard'
import OptionsDropdown from '@/components/Common/Dropdown'

const JobPage = ({ params }: any) => {
  const selectedJob = jobs.find((job) => job.jobId === params.id)

  const options = [
    { label: 'Edit', link: `/job-board/edit-post/${params.id}`, isActive: true },
    { label: 'Duplicate', link: '/duplicate', isActive: false },
    { label: 'Share', link: '/share', isActive: false },
    { label: 'Add to favorites', link: '/favorites', isActive: false },
    { label: 'Delete', link: '/delete', isActive: true },
  ]

  return (
    <Layout>
      <div className="mx-auto flex h-full min-h-screen max-w-7xl flex-col items-center justify-center p-10">
        <div className="flex w-full max-w-3xl justify-end p-10">
          <OptionsDropdown options={options} />
        </div>
        {selectedJob && (
          <div className="max-w-3xl rounded-lg bg-amber-300 p-6 text-xl font-medium shadow-lg">
            <h2 className="text-xl font-semibold text-gray-600">
              Job Title:
              <br />
              <p className="font-normal text-white">{selectedJob.jobTitle}</p>
            </h2>
            <h2 className="text-xl font-semibold text-gray-600">
              Company:
              <br />
              <p className="font-normal text-white">{selectedJob.companyName}</p>
            </h2>
            <h2 className="text-xl font-semibold text-gray-600">
              Job Location:
              <br />
              <p className="font-normal text-white">{selectedJob.location}</p>
            </h2>
            <h2 className="mt-4 text-xl font-semibold text-gray-600">
              Job Description:
              <br />
              <p className="font-normal text-white">{selectedJob.jobDescription}</p>
            </h2>
            <h2 className="mt-2 font-semibold text-gray-600">
              Employment Type:
              <br />
              <p className="font-normal text-white">{selectedJob.employmentType}</p>
            </h2>
            <h2 className="mt-2 font-semibold text-gray-600">
              Skills & Qualifications:
              <br />
              <p className="font-normal text-white">{selectedJob.skillsQualifications}</p>
            </h2>
            <h2 className="mt-2 font-semibold text-gray-600">
              Compensation & Benefits:
              <br />
              <p className="font-normal text-white">{selectedJob.compensationBenefits}</p>
            </h2>
            <h2 className="mt-2 font-semibold text-gray-600">
              Application Process:
              <br />
              <p className="font-normal text-white">{selectedJob.applicationProcess}</p>
            </h2>
            <h2 className="mt-2 font-semibold text-gray-600">
              Application Deadline:
              <br />
              <p className="font-normal text-white">{selectedJob.applicationDeadline}</p>
            </h2>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default JobPage
