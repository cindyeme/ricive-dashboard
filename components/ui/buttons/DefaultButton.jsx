const DefaultButton = (props) => {
  const { type = "button", text, children, ...rest } = props;
  return (
    <button
      type={type}
      className={`btn btn--default ${
        children && "flex items-center space-x-2"
      }`}
      {...rest}
    >
      {children}
      <span className=" text-[14px]">{text}</span>
    </button>
  );
};

export default DefaultButton;
