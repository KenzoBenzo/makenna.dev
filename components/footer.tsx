import { IconButton } from "@radix-ui/themes"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useCallback } from "react"
import { MoonIcon, SunIcon } from "./icons"

export const Footer = () => {
  const { theme, setTheme } = useTheme()

  const handleSetTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, setTheme])

  return (
    <footer className='flex justify-between max-w-screen-lg px-3 mt-16 mx-auto bg-sage-2 py-3 rounded-lg'>
      <p>MCS</p>
      <div className="hidden sm:flex items-center gap-4">
        <Link href="/blog">Blog</Link>
        <IconButton variant="surface" color='gray' onClick={handleSetTheme} size="1" >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        {/* <Link href="/design-systems">Design Systems</Link> */}
      </div>
    </footer>
  )
}