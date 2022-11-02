
const Line = () => {

  return (
    <>
      <div className="progress-wrapper">
        <div className="progress-inner">
          <div
            className={`progress-bg bg-primary-300 h-2`}
            style={{ width: `${50}%` }}
          />
        </div>
      </div>
      {children}
    </>
  );
};

export default Line;
