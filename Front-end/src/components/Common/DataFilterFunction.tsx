interface Job {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  jobTitle: string;
  industry: string;
  location: string;
  jobDescription: string;
  employmentType: string;
  skillsQualifications: string;
  compensationBenefits: string;
  applicationProcess: string;
  applicationDeadline: string;
}

const filterJobs = (searchQuery: string, jobs: Job[]): Job[] => {
  const searchLower = searchQuery.toLowerCase();

  return jobs.filter((job) => {
    const titleLower = job.jobTitle.toLowerCase();
    const companyLower = job.companyName.toLowerCase();
    const locationLower = job.location.toLowerCase();
    const descriptionLower = job.jobDescription.toLowerCase();
    const requirementsLower = job.skillsQualifications.toLowerCase();
    const salaryLower = job.compensationBenefits.toLowerCase();

    return (
      titleLower.includes(searchLower) ||
      companyLower.includes(searchLower) ||
      locationLower.includes(searchLower) ||
      descriptionLower.includes(searchLower) ||
      requirementsLower.includes(searchLower) ||
      salaryLower.includes(searchLower)
    );
  });
};

export default filterJobs;


//   return users.filter((user) => {
//     const nameLower = user.name ? user.name.toLowerCase() : ''
//     const loginLower = user.login.toLowerCase()

//     // Check if the search query is an exact match to the name or login
//     if (nameLower === searchLower || loginLower === searchLower) {
//       return true
//     }

//     // Check if the name or login starts with the search query
//     if (
//       nameLower.startsWith(searchLower) ||
//       loginLower.startsWith(searchLower)
//     ) {
//       return true
//     }

//     // Check if the name or login contains the search query as a separate word
//     const nameWords = nameLower.split(' ')
//     const loginWords = loginLower.split(' ')

//     return nameWords.includes(searchLower) || loginWords.includes(searchLower)
//   })
// }



