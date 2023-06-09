import JobCard from '@/components/Common/JobCard'
import { jobs } from '@/shared/constants/jobs'

const page = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-10 lg:grid-cols-3 xl:grid-cols-4">
      {jobs.map((job, id) => (
        <div key={id} className="rounded-xl">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  )
}

export default page
