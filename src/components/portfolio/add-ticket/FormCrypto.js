import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from 'components/common/TextInput'
import { Crypto } from 'classes/Crypto'
import { validateCommonFields, checkIsNumber } from './validations'
import { addCrypto } from 'api'

const validate = (values) => {
  let errors = {}
  errors = validateCommonFields({ errors, values })

  if(!values.numCoins || values.numCoins <= 0) {
    errors.numCoins = 'Requerido'
  } else if (!checkIsNumber(values.numCoins)) {
    errors.numCoins = 'Debe ser un número'
  }

  return errors
}
  
const FormCrypto = ({ email }) => {
  const handleSubmitCrypto = (values) => {
    addCrypto({ crypto: values, userEmail: email })
  }

  const initialValues = new Crypto({ ticket: '', price: 0, moneyInvested: 0, numCoins: 0 })
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={values => handleSubmitCrypto(values)}>
      <Form>
        <TextInput name="ticket" label="Crypto" />
        <br />
        <TextInput name="price" label="Price" />
        <br />
        <TextInput name="moneyInvested" label="Money invested" />
        <br />
        <TextInput name="numCoins" label="Number of coins" />
        <br />
        <ErrorMessage name="radio" />
        <button type="submit">Create Crypto</button>
      </Form>
    </Formik>
  )
}

export default FormCrypto