import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return(
    <header className="flex items-center justify-between p-4 bg-blue-600 dark:bg-gray-800 text-white shadow-md">
      <h1 className="text-2xl ml-6 font-bold">Resume Generator</h1>
      <ThemeToggle />
    </header>
  )
}
export default Header