import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        className="mb-4 w-full rounded-full border border-gray-300 bg-[#6761A4] px-5 py-4 text-xl outline-none"
        placeholder="Password"
        value={value}
        required
        onChange={handlePasswordChange}
      />
      <div
        className="absolute right-7 top-[40%] -translate-y-1/2 transform cursor-pointer p-1 text-[19px] duration-200 ease-in-out hover:text-xl hover:text-[#211E3C]"
        onClick={handlePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  )
}

export default PasswordInput
