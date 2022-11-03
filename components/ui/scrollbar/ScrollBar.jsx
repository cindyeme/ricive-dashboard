import { Scrollbars } from "react-custom-scrollbars";

const ScrollBar = (props) => {
  const { ...rest } = props;

  return (
    <Scrollbars
      {...rest}
    />
  );
};

export default ScrollBar;
