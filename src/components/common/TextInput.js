import { useField } from 'formik'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="control">
      <label className="label">{meta.touched && meta.error ? <span className="error">{meta.error}</span> : null} {label}</label>
      <input className="input" {...field} {...props} autoComplete="off"/>
    </div>
  )
}

export default TextInput