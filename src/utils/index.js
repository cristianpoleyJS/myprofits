export const formatCurrency = (number) => {
    return new Intl.NumberFormat('es', {style: "currency", currency: "EUR"}).format(number)
}
export const formatNumber = (number) => {
    return new Intl.NumberFormat('es', {maximumSignificantDigits: 10}).format(number)
}