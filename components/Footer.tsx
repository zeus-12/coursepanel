interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="lg:px-18 bg-[#F26522] px-4 py-16 pb-64 text-white sm:px-16 md:px-32 xl:px-32">
      <p className="text-3xl font-semibold">Coursepanel</p>
      <p className="text-gray-200">IIT Madras, Chennai - 36</p>
    </div>
  );
};
