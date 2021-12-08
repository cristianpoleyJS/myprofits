import { useState } from 'react'

export const useTheme = (thm) => {
    const [theme, setTheme] = useState(thm)
    const changeTheme = () => {
        setTheme(theme)
    }

    return [theme, changeTheme]
}