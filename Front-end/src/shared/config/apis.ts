const baseUrl = 'http://localhost:5000'
const authApis = baseUrl + '/api/auth'
const userApis = baseUrl + '/api/users'

const Apis = Object.freeze({
  auth: {
    register: authApis + '/signup',
    login: authApis + '/login',
    authenticate: userApis + '/me',
    logout: authApis + '/logout',
  },
  users: {
    authenticate: userApis + '/me',
  },
})

export default Apis
