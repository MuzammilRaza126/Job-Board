import JobForm from '@/components/Common/JobForm'

const EditJobPage: React.FC = () => {
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
