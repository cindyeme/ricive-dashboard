const PrimaryButton = ({ type = "button", text, children }) => {
  return (
    <button
      type={type}
      className={`btn btn--primary ${
        children && "flex items-center space-x-2"
      }`}
    >
      {children}
      <span className="text-[14px]">{text}</span>
    </button>
  );
};

export default PrimaryButton;
