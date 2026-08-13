export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  email: string
  name: string
  role: string
  accessToken: string
  message: string
}
