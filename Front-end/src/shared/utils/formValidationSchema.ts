import * as Yup from 'yup'

export const formValidationSchema = Yup.object().shape({
  contactName: Yup.string().required('Contact name is required'),
  contactEmail: Yup.string()
    .email('Invalid email address')
    .required('Contact email is required'),
  jobTitle: Yup.string().required('Job title is required'),
  jobDescription: Yup.string().required('Job description is required'),
  location: Yup.string().required('Location is required'),
  employmentType: Yup.string().required('Employment type is required'),
  skillsQualifications: Yup.string().required(
    'Skills/Qualifications are required'
  ),
  applicationProcess: Yup.string().required('Application process is required'),
  applicationDeadline: Yup.date().required('Application deadline is required'),
})
