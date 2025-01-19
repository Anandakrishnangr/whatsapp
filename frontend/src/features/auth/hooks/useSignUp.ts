import { useState } from 'react'
interface SignInProps {
  mobile: string,
  otp: string,
  firstName: string,
  lastName: string,
}
export const useSignIn = () => {
  const [data, setdata] = useState<SignInProps>({ mobile: "", otp: "", lastName: "", firstName: "" })
  const handleLogin = () => {
    console.log("login")
  }
  return { data, setdata ,handleLogin}
}
