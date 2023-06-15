'use client'
import filterJobs from '@/components/Common/DataFilterFunction'
import JobCard from '@/components/Common/JobCard'
import SearchJobs from '@/components/Common/SearchInput'
import Layout from '@/components/Layout/Layout'
import { jobs } from '@/shared/constants/jobs'
import Link from 'next/link'
import React, { useState } from 'react'

interface Job {
  id: string
}

interface JobsPageProps {
  jobs: Job[]
}

const page = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchUsers = (query: string) => {
    setSearchQuery(query)
  }

  const filteredData = filterJobs(searchQuery, jobs)
  return (
    <Layout>
      <div className="mx-auto h-full min-h-screen max-w-7xl p-10">
        <div className="p-3">
          <SearchJobs onSearch={handleSearchUsers} />
        </div>
        {searchQuery ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {!filteredData.length ? (
              <div>
                <p className="p-3">Search Not Found</p>
              </div>
            ) : (
              filteredData.map((job, id) => (
                <div key={id} className="rounded-xl">
                  {/* <JobCard job={job} /> */}
                  <JobCard job={job} />
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 p-3 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.map((job, id) => (
              <Link href={`/job-board/${job.jobId}`}>
                <div key={id} className="rounded-xl">
                  <JobCard job={job} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps<JobsPageProps> = async () => {
//   return {
//     props: {
//       jobs,
//     },
//   }
// }

export default page
