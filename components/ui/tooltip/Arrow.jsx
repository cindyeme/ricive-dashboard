import {
  BsFillCaretDownFill,
  BsFillCaretLeftFill,
  BsFillCaretUpFill,
  BsFillCaretRightFill,
} from "react-icons/bs";

const Arrow = ({ placement, color, colorDark }) => {
  const arrowDefaultClass = `absolute text-${color} dark:text-${colorDark}`;

  const getArrow = () => {
    switch (placement) {
      case "top":
        return (
          <BsFillCaretDownFill
            className={`${arrowDefaultClass} -bottom-2 w-full left-0`}
          />
        );
      case "top-start":
        return (
          <BsFillCaretDownFill
            className={`${arrowDefaultClass} -bottom-2 left-0 ml-3`}
          />
        );
      case "top-end":
        return (
          <BsFillCaretDownFill
            className={`${arrowDefaultClass} -bottom-2 right-0 mr-3`}
          />
        );
      case "right":
        return (
          <BsFillCaretLeftFill
            className={`${arrowDefaultClass} -left-2 top-1/2 transform -translate-y-1/2`}
          />
        );
      case "right-start":
        return (
          <BsFillCaretLeftFill
            className={`${arrowDefaultClass} -left-2 top-2`}
          />
        );
      case "right-end":
        return (
          <BsFillCaretLeftFill
            className={`${arrowDefaultClass} -left-2 bottom-2`}
          />
        );
      case "bottom":
        return (
          <BsFillCaretUpFill
            className={`${arrowDefaultClass} -top-2 w-full left-0`}
          />
        );
      case "bottom-start":
        return (
          <BsFillCaretUpFill
            className={`${arrowDefaultClass} -top-2 left-0 ml-3`}
          />
        );
      case "bottom-end":
        return (
          <BsFillCaretUpFill
            className={`${arrowDefaultClass} -top-2 right-0 mr-3`}
          />
        );
      case "left":
        return (
          <BsFillCaretRightFill
            className={`${arrowDefaultClass} -right-2 top-1/2 transform -translate-y-1/2`}
          />
        );
      case "left-start":
        return (
          <BsFillCaretRightFill
            className={`${arrowDefaultClass} -right-2 top-2`}
          />
        );
      case "left-end":
        return (
          <BsFillCaretRightFill
            className={`${arrowDefaultClass} -right-2 bottom-2`}
          />
        );
      default:
        break;
    }
  };

  return getArrow();
};

export default Arrow;
