import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex h-10 justify-between bg-gray-950 px-10 py-5 bottom-0">
      <div className="flex items-center justify-start space-x-5">
        <button className="rounded-lg bg-[#D9D9D9] px-6 py-1">
          Website’s Logo
        </button>
        <Image alt="discord" src="/images/discord.png" height={25} width={25} />
      </div>

      <div className="flex items-center justify-around space-x-16 text-white">
        <button className="">2023 website.com</button>
        <button className="">Get Help</button>
        <button className="">Privacy Policy</button>
        <button className="">Terms of Services</button>
      </div>
    </div>
  )
}

export default Footer
