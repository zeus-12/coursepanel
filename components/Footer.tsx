import { paddingStyles } from "../utils/constants";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={`bg-[#0f003a] py-16 pb-64 text-white ${paddingStyles}`}>
      <p className="text-3xl font-semibold">Coursepanel</p>
      <p className="text-gray-200">IIT Madras, Chennai - 36</p>
    </div>
  );
};
