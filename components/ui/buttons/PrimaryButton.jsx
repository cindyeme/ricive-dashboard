const PrimaryButton = ({ type, text }) => {
  return (
    <>
      <button className="btn btn--primary" type={type}>
        {text}
      </button>
      <style jsx>
        {`
          .btn {
            width: 100% !important;
            height: 43px;
            font-size: 1.05rem;
          }
          .btn:hover {
            background: #f05b17;
          }
        `}
      </style>
    </>
  );
};

export default PrimaryButton;
