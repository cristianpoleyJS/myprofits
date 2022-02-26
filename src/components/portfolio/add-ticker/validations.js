export const validateCommonFields = ({ errors, values }) => {

    if(!values.ticker) {
      errors.ticker = ''
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