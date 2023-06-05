import Image from 'next/image'
import Link from 'next/link'

const Register: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-[1.5] bg-[#D9D9D9]" />
      <div className="flex flex-1 items-center justify-center bg-[#211E3C] text-white">
        <div className="mx-auto max-w-xs space-y-7 xl:max-w-[420px]">
          <h1 className="mb-4 text-3xl font-bold">Sign up</h1>
          <Link href="/login">
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
          </Link>
          <hr className="mx-auto mb-4 w-[95%]" />
          <input
            type="email"
            className="mb-4 w-full rounded-full border border-gray-300 bg-[#6761A4] px-5 py-4 outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            className="mb-4 w-full rounded-full border border-gray-300 bg-[#6761A4] px-5 py-4 outline-none"
            placeholder="Password"
          />
          <p className="text-[#C0C0C0]">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
