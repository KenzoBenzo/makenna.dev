import Link from "next/link"
import { ThemeSwitcher } from "./theme-switcher"

export const Footer = () => {
  return (
    <footer className='flex justify-between max-w-screen-lg px-3 mt-16 mx-auto bg-sage-2 py-3 rounded-lg'>
      <p>MCS</p>
      <div className="flex items-center gap-4">
        <Link href="/blog">Blog</Link>
        <a
          href='/resume.pdf'
          download='makenna-smutz_resume'
        >
          <span className='hidden sm:inline-block'>Download</span> CV
        </a>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}