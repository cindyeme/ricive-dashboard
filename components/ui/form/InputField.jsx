const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  children,
  error,
  onChange,
  value,
  loading,
  ...rest
}) => {
  return (
    <label className="form--label">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        className={`form--input ${error && "form--input_error"}`}
        placeholder={placeholder}
        disabled={loading}
        {...rest}
      />
      {children}
    </label>
  );
};

export default Input;
