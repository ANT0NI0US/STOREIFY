import ClockList from "./ClockList";

interface ClockProps {
  label: string;
}

const allClocks: Array<ClockProps> = [
  {
    label: "days",
  },
  {
    label: "hours",
  },
  {
    label: "minutes",
  },
  {
    label: "seconds",
  },
];

export default function Clock() {
  return (
    <div className="flexCenter my-[16px] flex flex-wrap gap-2 sm:gap-5 md:justify-start">
      {allClocks.map((clock, index) => (
        <ClockList key={index} clock={clock} />
      ))}
    </div>
  );
}
