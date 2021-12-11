export const validateCommonFields = ({ errors, values }) => {

    if(!values.ticket) {
      errors.ticket = ''
    }
  
    if(!values.price || values.price <= 0) {
      errors.price = ''
    } else if (!checkIsNumber(values.price)) {
      errors.price = 'Must be a number'
    }

    if(!values.moneyInvested || values.moneyInvested <= 0) {
      errors.moneyInvested = ''
    } else if (!checkIsNumber(values.moneyInvested)) {
      errors.moneyInvested = 'Must be a number'
    }
    return errors
  }

export const checkIsNumber = (value) => {
  return !Number.isNaN(Number(value))
}