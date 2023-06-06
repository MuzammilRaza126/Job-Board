'use client'
import JobForm from '@/components/Common/JobForm'

const CreateJobPage: React.FC = () => {
  const initialValues = {
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyName: '',
    industry: '',
    location: '',
    jobTitle: '',
    jobDescription: '',
    employmentType: '',
    skillsQualifications: '',
    compensationBenefits: '',
    applicationProcess: '',
    applicationDeadline: '',
  }

  const handleCreateJob = (values: any) => {
    // Handle the create job logic, e.g., call an API endpoint
    console.log('Creating job:', values)
  }

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="m-10 w-full max-w-md rounded-full bg-amber-500 text-center text-2xl">
        Create Job
      </h1>
      <JobForm
        mode="create"
        initialValues={initialValues}
        onSubmit={handleCreateJob}
      />
    </div>
  )
}
export default CreateJobPage
