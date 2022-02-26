import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from 'components/common/TextInput'
import { Crypto } from 'classes/Crypto'
import { validateCommonFields, checkIsNumber } from './validations'
import { addCrypto } from 'api'
import { useDispatch } from 'react-redux'
import { ADD_CRYPTO } from 'store/actions/portfolioActions'
import 'assets/styles/Form.css'

const validate = (values) => {
  let errors = {}
  errors = validateCommonFields({ errors, values })

  if(!values.numCoins || values.numCoins <= 0) {
    errors.numCoins = '*'
  } else if (!checkIsNumber(values.numCoins)) {
    errors.numCoins = 'Must be a number'
  }

  return errors
}
  
const FormCrypto = ({ email }) => {
  const dispatch = useDispatch()

  const handleSubmitCrypto = (values) => {
    const newCrypto = { crypto: values, userEmail: email }
    addCrypto(newCrypto)
    dispatch({ type: ADD_CRYPTO, payload: newCrypto })
  }

  const initialValues = new Crypto({ ticker: '', price: 0, moneyInvested: 0, numCoins: 0 })
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={values => handleSubmitCrypto(values)}>
      <Form id="form-crypto-id">
        <TextInput name="ticker" label="Crypto" placeholder="BTC" />
        <br />
        <TextInput name="moneyInvested" label="Money invested" />
        <br />
        <TextInput name="numCoins" label="Number of coins" />
        <br />
        <ErrorMessage name="radio" />
      </Form>
    </Formik>
  )
}

export default FormCrypto