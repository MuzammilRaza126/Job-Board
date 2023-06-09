'use client'

import PasswordInput from '@/components/Authentication/PasswordHandler'
import Apis from '@/shared/config/apis'
import useRequestHandler from '@/shared/utils/useRequestHandler'
import ky from 'ky'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const Register = () => {
  const router = useRouter()
  const { requestHandler } = useRequestHandler()
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleInputChange = (field: string, value: string) => {
    setSignupForm((prev) => ({ ...prev, [field]: value }))
  }
  const onSignup = async () => {
    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      return
    }
    try {
      const res: any = await ky
        .post(Apis.auth.register, {
          credentials: 'include',
          json: signupForm,
        })
        .json()   
        const user = typeof res.user === 'string' ? res.user : JSON.stringify(res.user);
        localStorage.setItem('user', user);
      router.push('/')
      // Show success message
      console.log("You're Email successfully registered!!")
    } catch (error) {
      // Handle error
      console.error('Signup error:', error)
    }
  }

  // function onGoogleLogin() {
  //   // to open auth in new window -> https://github.com/jaredhanson/passport-facebook/issues/188
  //   window.open(Apis.auth.google, '_self')
  // }

  return (
    <div className="flex h-screen">
      <div className="flex flex-[1.5] bg-[#D9D9D9]" />
      <div className="flex flex-1 items-center justify-center bg-[#211E3C] text-white">
        <div className="mx-auto max-w-xs space-y-7 xl:max-w-[420px]">
          <h1 className="mb-4 text-3xl font-bold">Sign up</h1>
          <button className="mb-4 flex h-14 w-full items-center justify-center rounded-full bg-white px-4 py-4 text-gray-900">
            <Image
              height={35}
              width={35}
              alt="google icon"
              src="/images/google-icon.png"
              className="mx-5"
            />
            Sign in with Google
          </button>
          <hr className="mx-auto mb-4 w-[95%]" />
          <input
            type="text"
            className="mb-4 w-full rounded-full border border-gray-300 bg-[#6761A4] px-5 py-4 outline-none"
            placeholder="Name"
            value={signupForm.name}
            onChange={(e) =>
              setSignupForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="email"
            className="mb-4 w-full rounded-full border border-gray-300 bg-[#6761A4] px-5 py-4 outline-none"
            placeholder="Email"
            value={signupForm.email}
            onChange={(e) =>
              setSignupForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {/* <input
            type="password"
            className="mb-4 w-full rounded-full border border-gray-300 bg-[#6761A4] px-5 py-4 outline-none"
            placeholder="Password"
            value={signupForm.password}
            onChange={(e) =>
              setSignupForm((prev) => ({ ...prev, password: e.target.value }))
            }
          /> */}
          <PasswordInput
            value={signupForm.password}
            onChange={(value) => handleInputChange('password', value)}
          />
          <button
            className="mb-4 w-full rounded-full border border-[#6761A4] bg-transparent px-5 py-4 text-xl outline-none"
            onClick={onSignup}
          >
            Submit
          </button>
          <p className="text-[#C0C0C0]">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Register
