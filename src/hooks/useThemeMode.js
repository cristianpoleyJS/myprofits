import { useEffect, useState } from 'react'

export const DARK = 'dark'
export const LIGHT = 'light'

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState()

  useEffect(() => {
    if (themeMode) {
      localStorage.setItem('themeMode', themeMode)
      setDocumentClass()
    }
  }, [themeMode])

  useEffect(() => {
    !localStorage.getItem('themeMode')
      ? setThemeMode(LIGHT)
      : setThemeMode(localStorage.getItem('themeMode'))
    setDocumentClass()
  }, [])

  return [themeMode, setThemeMode]
}

function setDocumentClass () {
  localStorage.getItem('themeMode') === DARK
    ? document.body.classList.add(DARK)
    : document.body.classList.remove(DARK)
}
