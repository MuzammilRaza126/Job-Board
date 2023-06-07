const baseUrl = process.env.NEXT_PUBLIC_API_URL
const authApis = baseUrl + '/api/users'

const Apis = Object.freeze({
  auth: {
    register: authApis + '/register',
    login: authApis + '/login',
    logout: authApis + '/logout',
  },
})

export default Apis
