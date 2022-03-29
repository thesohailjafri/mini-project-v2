const baseURL = process.env.NEXT_PUBLIC_API_URL

const endpoints = {
  auth: {
    login: `${baseURL}/auth/login/`,
    register: `${baseURL}/auth/register/`,
    verifyEmail: `${baseURL}/auth/verify-email/`,

    // verify: `${baseURL}/auth/verify/login/`,
    // logout: `${baseURL}/auth/logout/`,
    // myself: `${baseURL}/auth/myself/`,
  },
}

export default endpoints
