import { Formik, Form, ErrorMessage } from 'formik'
import { TextInput } from '../common/TextInput'
import { Stock } from '../../classes/Stock'
import { validateCommonFields, checkIsNumber } from './utils'

const validate = (values) => {
  let errors = {}
  errors = validateCommonFields({ errors, values })

  if(!values.numStocks || values.numStocks <= 0) {
    errors.numStocks = 'Requerido'
  } else if (checkIsNumber(values.numStocks)) {
    errors.numStocks = 'Debe ser un número'
  }

  return errors
}
  
export const FormStock = () => {
  const initialValues = new Stock({ ticket: '', price: 0, moneyInvested: 0, numStocks: 0 })
    return (
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={values => console.log(values)}>
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