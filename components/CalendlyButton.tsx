import { Button } from "@mantine/core";

interface CalendlyButtonProps {
  size: "sm" | "md";
}

export const CalendlyButton: React.FC<CalendlyButtonProps> = ({ size }) => {
  return (
    <div className={size === "md" ? "scale-[130%]" : ""}>
      {/* <div className="scaleClass"> */}
      <a href="https://calendly.com/coursepanel/30min">
        <Button className="bg-[#003B75]">▶️ Book demo</Button>
      </a>
    </div>
  );
};
