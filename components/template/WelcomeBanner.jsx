import { FiDownloadCloud } from "react-icons/fi";
import { DefaultButton, PrimaryButton } from "../ui/buttons";
import Button from "../ui/buttons/Button";

function WelcomeBanner() {
  return (
    <div className="relative mb-10">
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
            <PrimaryButton text="Insights" />
          </div>
        </div>
        <p>Measure your advertising ROI and track and report website traffic</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
