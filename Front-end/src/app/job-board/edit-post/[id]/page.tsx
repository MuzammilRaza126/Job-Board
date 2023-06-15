'use client'
import JobForm from '@/components/Common/JobForm'
import { jobs } from '@/shared/constants/jobs'
// import dynamic from 'next/dynamic';

// const DynamicJobForm = dynamic(() => import('@/components/Common/JobForm'), { ssr: false });

const EditJobPage: React.FC = ({ params }: any) => {
  const selectedJob = jobs.find((job) => job.jobId === params.id)

  const initialValues = {
    contactName: selectedJob?.contactName || '',
    contactEmail: selectedJob?.contactEmail || '',
    contactPhone: selectedJob?.contactPhone || '',
    companyName: selectedJob?.companyName || '',
    jobTitle: selectedJob?.jobTitle || '',
    industry: selectedJob?.industry || '',
    location: selectedJob?.location || '',
    jobDescription: selectedJob?.jobDescription || '',
    employmentType: selectedJob?.employmentType || '',
    skillsQualifications: selectedJob?.skillsQualifications || '',
    compensationBenefits: selectedJob?.compensationBenefits || '',
    applicationProcess: selectedJob?.applicationProcess || '',
    applicationDeadline: selectedJob?.applicationDeadline || '',
  }


  const handleUpdateJob = (values: any) => {
    // Handle the update job logic, e.g., call an API endpoint
    console.log('Updating job:', values)
  }

  return (
    <div>
      <h1>Edit Job</h1>
      <JobForm
        mode="edit"
        initialValues={initialValues}
        onSubmit={handleUpdateJob}
      />
    </div>
  )
}
export default EditJobPage
