import { FaArrowRight } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { usePopperTooltip } from "react-popper-tooltip";
import { DefaultButton } from "../ui/buttons";

function WelcomeBanner() {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: "bottom-end",
    trigger: "click",
    defaultVisible: true,
    closeOnOutsideClick: true,
  });
  //
  return (
    <div className="relative mb-6">
      {/* Content */}
      <div className="relative">
        <div className="flex justify-between items-center mb-1.5">
          <h1 className="text-2xl md:text-3xl text-black-600 font-semibold mb-1">
            Welcome back, Karen
          </h1>
          <div className="flex items-center space-x-3">
            <DefaultButton text="Export">
              <FiDownloadCloud />
            </DefaultButton>
            <div className="btn btn--primary text-sm cursor-pointer">
              <button type="button" ref={setTriggerRef}>
                Insights
              </button>
              {visible && (
                <div
                  ref={setTooltipRef}
                  {...getTooltipProps({
                    className:
                      "tooltip-container text-left !rounded-[8px] !px-4 !py-3 !bg-primary-400 !border-primary-400 !text-white mt-3",
                  })}
                >
                  <div
                    {...getArrowProps({
                      className:
                        "tooltip-arrow after:!border-r-transparent after:!border-l-transparent after:!border-primary-400",
                    })}
                  />
                  <p className="text-sm font-semibold pb-1.5">
                    Find your business insights here
                  </p>
                  <p className="text-xs">
                    Remain updated about your customer reach, <br /> views and
                    engagements increase.
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
          </div>
        </div>
        <p>Measure your advertising ROI and track and report website traffic</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
