
const Line = () => {

  return (
    <>
      <div className="progress-wrapper">
        <div className="progress-inner">
          <div
            className={`progress-bg bg-primary-300 h-2 rounded-full`}
            style={{ width: `${80}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default Line;
