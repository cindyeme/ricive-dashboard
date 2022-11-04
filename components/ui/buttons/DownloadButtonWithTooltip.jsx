import { FaArrowRight } from "react-icons/fa";
import { usePopperTooltip } from "react-popper-tooltip";
import { FiDownloadCloud } from "react-icons/fi";

const DownloadButtonWithTooltip = () => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: "bottom",
    trigger: "click",
    defaultVisible: true,
    closeOnOutsideClick: true,
  });
  return (
    <div className="btn btn--default !pb-1 text-sm cursor-pointer">
      <button type="button" ref={setTriggerRef}>
        <span className="flex items-center space-x-2">
          <FiDownloadCloud size={18} />
          <span>Download</span>
        </span>
      </button>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className:
              "tooltip-container text-left !rounded-[8px] !px-4 !py-3 !bg-primary-400 !border-primary-400 !text-white mt-4",
          })}
        >
          <div
            {...getArrowProps({
              className:
                "tooltip-arrow after:!border-r-transparent after:!border-l-transparent after:!border-primary-400",
            })}
          />
          <p className="text-sm font-semibold pb-1.5">
            Download your transaction report
          </p>
          <p className="text-xs">
            Easily download your business transactions <br /> reports with just
            a tap.
          </p>
          <div className="flex items-end justify-end">
            <button className="cursor-pointer bg-white rounded px-2 py-1.5 text-black-500 text-xs mt-3 flex items-center space-x-1">
              <span>Next</span>
              <FaArrowRight size={8} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DownloadButtonWithTooltip;
