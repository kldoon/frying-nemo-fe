import './input.css'

const Input = props => {
  const {label, required, ...inputProps} = props;

  return (
    <div className="input-group">
      {label &&
      (<label>
        <span>{label}</span>
        &nbsp;
        {required && (<span className='required'>*</span>)}
        </label>)}
      <input {...{required: required, ...inputProps}} />
    </div>
  )
}

export default Input