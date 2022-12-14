import Link from "next/link";
import { paddingStyles } from "../utils/constants";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div
      className={`md:items-cente flex flex-col justify-center gap-8 bg-[#0f003a] py-16 text-white md:flex-row md:gap-32 ${paddingStyles}`}
    >
      <div>
        <p className="text-xl font-semibold">Coursepanel</p>
        <p className="text-gray-400">IIT Madras, Chennai - 36</p>
      </div>
      <div>
        <p className="text-xl font-semibold">Contact Details</p>
        <a href="tel:+91 98201 78330">
          Ankit -{" "}
          <span className="text-gray-400 hover:text-cyan-400">
            +91 98201 78330
          </span>
        </a>
      </div>
      <div>
        <p className="text-xl font-semibold">Products</p>
        {[
          { title: "Coursemap", link: "/map" },
          { title: "Courseplan", link: "/plan" },
          { title: "Contact", link: "/contact" },
        ].map((item) => (
          <Link key={item.link} href={item.link}>
            <p className="text-gray-400 hover:text-cyan-400">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
