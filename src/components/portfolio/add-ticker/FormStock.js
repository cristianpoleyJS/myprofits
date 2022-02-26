import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from 'components/common/TextInput'
import { Stock } from 'classes/Stock'
import { validateCommonFields, checkIsNumber } from './validations'
import { addStock } from 'api'
import { ADD_STOCK } from 'store/actions/portfolioActions'
import { useDispatch } from 'react-redux'
import 'assets/styles/Form.css'

const validate = (values) => {
  let errors = {}
  errors = validateCommonFields({ errors, values })

  if(!values.numStocks || values.numStocks <= 0) {
    errors.numStocks = ''
  } else if (!checkIsNumber(values.numStocks)) {
    errors.numStocks = 'Must be a number'
  }

  return errors
}
  
const FormStock = ({ email }) => {
  const dispatch = useDispatch()

  const handleSubmitStock = (values) => {
    const newStock = { stock: values, userEmail: email }
    addStock(newStock)
    dispatch({ type: ADD_STOCK, payload: newStock })
  }

  const initialValues = new Stock({ ticker: '', price: 0, moneyInvested: 0, numStocks: 0 })
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={values => handleSubmitStock(values)}>
      <Form id="form-stock-id">
        <TextInput name="ticker" label="Stock" placeholder="BABA" />
        <br />
        <TextInput name="moneyInvested" label="Money invested" />
        <br />
        <TextInput name="numStocks" label="Number of stocks" />
        <br />
        <ErrorMessage name="radio" />
      </Form>
    </Formik>
  )
}

export default FormStock