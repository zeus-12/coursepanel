import { Button } from "@mantine/core";

interface CalendlyButtonProps {}

export const CalendlyButton: React.FC<CalendlyButtonProps> = ({}) => {
  return (
    <>
      <a href="https://calendly.com/coursepanel/30min">
        <Button className="bg-[#003B75]">▶️ Book demo</Button>
      </a>
    </>
  );
};
