/** @format */

'use client'
import { useState, useEffect } from 'react'

// icons
import { CiLight, CiDark } from 'react-icons/ci'
import { IoMoonOutline } from 'react-icons/io5'
import { IoMdPartlySunny } from 'react-icons/io'

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setDarkMode(theme === 'dark')
      document.documentElement.classList.add(theme)
    } else {
      setDarkMode(false)
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    const theme = darkMode ? 'light' : 'dark'
    localStorage.setItem('theme', theme)
    document.documentElement.classList.remove(darkMode ? 'dark' : 'light')
    document.documentElement.classList.add(theme)
  }

  return (
    <button onClick={toggleTheme}>
      {darkMode ? <IoMdPartlySunny size={20} /> : <IoMoonOutline size={20} />}
    </button>
  )
}
