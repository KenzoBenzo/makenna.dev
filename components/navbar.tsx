import Image from "next/image"
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

        {/* <div className="flex items-center gap-1">
          <MapPinLineIcon size={16} className="text-sage-10" />
          <p>BK, NY</p>
        </div> */}
      </div>
      <div className="flex items-center gap-1">
        <MapPinLineIcon size={16} className="text-sage-10" />
        <p>BK, NY</p>
      </div>
      {/* <div className="hidden sm:flex items-center gap-4">
         <Link href="/blog" className={`text-link transition-all hover:text-mint-10`}>Blog</Link>
        <Link href="/design-systems" className={`text-link transition-all hover:text-mint-10`}>Design Systems</Link>
      </div> */}
    </nav>
  )
}