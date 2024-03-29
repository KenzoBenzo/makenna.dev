import Image from "next/image"
import Link from "next/link"
import { MapPinLineIcon } from "./icons"

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-2 w-full justify-between mt-14 max-w-screen-lg mb-20 mx-auto">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/profile.jpeg"
            alt="Makenna Smutz Selfie"
            width={32}
            height={32}
            className="rounded-full border border-sage-9"
            priority
          />
          <p className="text-xl	font-extrabold text-sage-12 leading-4">MCS</p>
        </div>

        <div className="flex items-center gap-1">
          <MapPinLineIcon size={16} className="text-sage-10" />
          <p>BK, NY</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/blog" className={`text-link transition-all hover:text-mint-10`}>Blog</Link>
        <a href="/resume.pdf" download="makenna-smutz_resume" className={`text-link transition-all hover:text-mint-10`}><span className="hidden sm:inline-block">Download</span> CV</a>
      </div>
    </nav>
  )
}