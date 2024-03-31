import { IconButton } from "@radix-ui/themes"
import { useTheme } from "next-themes"
import { useCallback } from "react"
import { MoonIcon, SunIcon } from "./icons"

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const handleSetTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, setTheme])

  return (
    <IconButton variant="surface" color='gray' onClick={handleSetTheme} size="1" >
      <MoonIcon className="block dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </IconButton>
  )
}