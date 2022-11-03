
const Button = (props) => {
  const {
    children,
    size,
    color,
    shape,
    variant,
    block,
    icon,
    className,
    disabled,
    loading,
    active,
    danger,
    text, type,
    ...rest
  } = props;

  const defaultClass = "button";
  const disabledClass = "opacity-50 cursor-not-allowed";

  const defaultColor = () => {
		const btn = {
			bgColor: active ? `bg-gray-100 border border-gray-300` : `bg-white border border-gray-300`,
			textColor: `text-gray-600 dark:text-gray-100`,
			hoverColor: active ? '' : `hover:bg-gray-50 dark:hover:bg-gray-600`,
			activeColor: `active:bg-gray-100`
		}
		return getBtnColor(btn)
	}

	const solidColor = () => {
		const btn = {
			bgColor: active ? `bg-primary-400` : 'bg-transparent border border-transparent',
			textColor: `text-white`,
			hoverColor: active ? '' : `hover:bg-primary-500`,
			activeColor: `active:bg-primary-500`
		}
		return getBtnColor(btn)
	}

	const getBtnColor = ({bgColor, hoverColor, activeColor, textColor}) => {
		return `${bgColor} ${disabled || loading ? disabledClass : (hoverColor + ' ' + activeColor)} ${textColor}`
	}

const btnColor = () => {
  switch (variant) {
    case "solid":
      return solidColor();
    case "default":
      return defaultColor();
    default:
      return defaultColor();
  }
  };
  
  const handleClick = (e) => {
		const { onClick } = props
		if (disabled || loading) {
			e.preventDefault()
			return
		}
		(onClick)?.(e)
	}

  const renderChildren = () => {

		if((icon && !children) && !loading) {
			return <>{icon}</>
		}

		if((icon && children) && !loading) {
			return (
			<span className="flex items-center justify-center">
				<span className="text-lg">{icon}</span>
				<span className="mr-1">{children}</span>
			</span>
			)
		}

		return <>{children}</>

	}

  return (
      <button
        className={`px-3 py-2 text-sm rounded-[8px] ${
          (defaultClass,
          btnColor(),
          getButtonSize(),
          className,
          block ? "w-full" : "")
        }`}
        type={type}
        onClick={handleClick}
        {...rest}
      >
        {renderChildren()}
      </button>
  );
};

export default Button;
