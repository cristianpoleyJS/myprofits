import { useState } from 'react'

export const useCurrency = (curr) => {
    const [currency, setCurrency] = useState(curr)
    const changeCurrency = () => {
        setCurrency(currency)
    }

    return [currency, changeCurrency]
}