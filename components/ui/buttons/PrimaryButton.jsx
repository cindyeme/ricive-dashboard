const PrimaryButton = (props) => {
  const { type = "button", text, children, ref, ...rest } = props;
  return (
    <button
      type={type}
      className={`btn btn--primary ${
        children && "flex items-center space-x-2"
      }`}
      ref={ref}
      {...rest}
    >
      {children}
      <span className="text-[14px]">{text}</span>
    </button>
  );
};

export default PrimaryButton;
