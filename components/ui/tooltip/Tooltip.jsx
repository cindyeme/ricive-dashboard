import React, { useState, useCallback, useRef, useEffect } from "react";
import { Popper, Reference, Manager } from "react-popper";
import Arrow from "./Arrow";
import { Portal } from "react-portal";
import Transition from "../../template/Transition";

const PopperElement = (props) => {
  const { title, forceUpdate, open } = props;
  useEffect(() => {
    if (open) {
      forceUpdate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return <span>{title}</span>;
};

const Tooltip = (props) => {
  const {
    className,
    children,
    title,
    placement,
    wrapperClass,
    isOpen,
    ...rest
  } = props;

  const [tooltipOpen, setTooltipOpen] = useState(isOpen);
  const tooltipNode = useRef();

  const tooltipBackground = "gray-800";
  const tooltipDarkBackground = "black";

  const defaultTooltipClass = `tooltip bg-${tooltipBackground} dark:bg-${tooltipDarkBackground}`;

  const toggleTooltip = useCallback(
    (bool) => {
      if (!isOpen) {
        setTooltipOpen(bool);
      }
    },
    [isOpen]
  );

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <span
            className={`tooltip-wrapper ${wrapperClass}`}
            ref={ref}
            onMouseEnter={() => toggleTooltip(true)}
            onMouseLeave={() => toggleTooltip(false)}
          >
            {children}
          </span>
        )}
      </Reference>
      {tooltipOpen && (
        <Portal>
          <Popper
            placement={placement}
            innerRef={(node) => (tooltipNode.current = node)}
            modifiers={[
              { name: "arrow", options: { element: Arrow } },
              { name: "offset", options: { offset: [0, 7] } },
            ]}
            strategy={"fixed"}
          >
            {({ ref, style, ...popperProps }) => (
              <Transition
                className={defaultTooltipClass}
                ref={ref}
                style={style}
                // show={tooltipOpen}
                tag="div"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <PopperElement
                  open={tooltipOpen}
                  title={title}
                  {...rest}
                  {...popperProps}
                />
                <Arrow
                  placement={placement}
                  color={tooltipBackground}
                  colorDark={tooltipDarkBackground}
                />
              </Transition>
            )}
          </Popper>
        </Portal>
      )}
    </Manager>
  );
};

export default Tooltip;
