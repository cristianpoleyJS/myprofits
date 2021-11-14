export const validateCommonFields = ({ errors, values }) => {

    if(!values.ticket) {
      errors.ticket = 'Requerido'
    } else if (values.ticket.length < 2 || values.ticket.length > 5) {
      errors.ticket = 'Revisa el tamaño del Ticket'
    }
  
    if(!values.price || values.price <= 0) {
      errors.price = 'Requerido'
    } else if (!checkIsNumber(values.price)) {
      errors.price = 'Debe ser un número'
    }

    if(!values.moneyInvested || values.moneyInvested <= 0) {
      errors.moneyInvested = 'Requerido'
    } else if (!checkIsNumber(values.moneyInvested)) {
      errors.moneyInvested = 'Debe ser un número'
    }

    if(!values.numStocks || values.numStocks <= 0) {
      errors.numStocks = 'Requerido'
    } else if (!checkIsNumber(values.numStocks)) {
      errors.numStocks = 'Debe ser un número'
    }
  
    return errors
  }

export const checkIsNumber = (value) => {
  return !Number.isNaN(Number(value))
}