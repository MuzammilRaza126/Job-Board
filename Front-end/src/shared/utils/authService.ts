import ky from 'ky'

const api = ky.create({ prefixUrl: '/api/auth' })

export async function registerUser(userData: string) {
  try {
    const response = await api.post('signup', { json: userData })
    return response.json()
  } catch (error:any) {
    throw await error.response.json()
  }
}

// Add other authentication methods here

export default {
  registerUser,
}
