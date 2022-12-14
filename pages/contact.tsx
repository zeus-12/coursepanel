import Navbar from "@components/Navbar";
import { Button } from "@mantine/core";
import { paddingStyles } from "../utils/constants";

const content = [
  {
    title: "Who are we?",
    content:
      "We are students of IIT Madras, aiming to solve Skill Mapping for institutions, and helping learners navigate through the varied curriculums offered in institutions.",
  },
  {
    title: "Talk with us",
    content:
      "Not convinced? Reach out to us and get  all your queries solved at contact@coursepanel.in",
  },
];

const Contact = () => {
  return (
    <>
      <Navbar backgroundColour="" />

      <div className={paddingStyles}>
        <div>
          <p className="my-4 text-5xl font-semibold tracking-tight">
            Get your journey started with us!
          </p>

          <Button className="" color={"dark"} variant="outline">
            Book a Demo
          </Button>
        </div>

        {content.map((item, i) => (
          <div className="mt-16" key={i}>
            <p className="text-3xl font-medium tracking-tight">{item.title}</p>
            <p className="text-xl text-gray-500">{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
