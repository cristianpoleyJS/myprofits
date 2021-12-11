export const transformToCurrency = (number) => {
    return new Intl.NumberFormat('es', {style: "currency", currency: "EUR"}).format(number)
}