import React from 'react'

const FC = ({
  name,
  label,
  errorMessage,
  inputContainerProps,
  labelProps,
  errorContainerProps,
  errorTextProps,
  ...restInputProps
}) => {
  return (
    <div className="input-container" {...inputContainerProps}>
      {!!label && (
        <label className="input-label" htmlFor={name} {...labelProps}>
          {label}
        </label>
      )}
      <div className="input-inner-container">
        <input className="input" name={name} {...restInputProps} />
        {!!errorMessage && (
          <div className="error-container" {...errorContainerProps}>
            <div className="error-text" {...errorTextProps}>
              {errorMessage}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { FC as Input }
