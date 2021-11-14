import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from 'components/common/TextInput'
import { Stock } from 'classes/Stock'
import { validateCommonFields, checkIsNumber } from './validations'
import { addStock } from 'api'

const validate = (values) => {
  let errors = {}
  errors = validateCommonFields({ errors, values })

  if(!values.numStocks || values.numStocks <= 0) {
    errors.numStocks = 'Requerido'
  } else if (!checkIsNumber(values.numStocks)) {
    errors.numStocks = 'Debe ser un número'
  }

  return errors
}
  
const FormStock = ({ email }) => {
  const handleSubmitStock = (values) => {
    addStock({ stock: values, userEmail: email })
  }

  const initialValues = new Stock({ ticket: '', price: 0, moneyInvested: 0, numStocks: 0 })
    return (
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={values => handleSubmitStock(values)}>
          <Form>
            <TextInput name="ticket" label="Ticket" />
            <br />
            <TextInput name="price" label="Price" />
            <br />
            <TextInput name="moneyInvested" label="Money invested" />
            <br />
            <TextInput name="numStocks" label="Number of stocks" />
            <br />
            <ErrorMessage name="radio" />
            <button type="submit">Create</button>
          </Form>
        </Formik>
    )
}

export default FormStock