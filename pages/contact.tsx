import { Button } from "@mantine/core";

interface ContactProps {}

const content = [
  {
    title: "Who are we?",
    content:
      " We are peoples from IIT Madras, located in Alakananda room 232. Something inspirational. Very motivational.",
  },
  {
    title: "Talk with us",
    content:
      "Not convinced? Reach out to us and get  all your queries solved at coursepanel@gmail.com",
  },
];

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="lg:px-18 px-4 py-16 sm:px-16 md:px-32  xl:px-32">
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
  );
};

export default Contact;
