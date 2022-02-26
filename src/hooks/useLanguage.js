import { useState } from 'react'

export const useLanguage = (lang) => {
    const [language, setLanguage] = useState(lang)
    const changeLanguage = () => {
        setLanguage(language)
    }

    return [language, changeLanguage]
}