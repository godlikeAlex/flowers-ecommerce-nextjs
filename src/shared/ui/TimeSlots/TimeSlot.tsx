import clsx from "clsx";
import classes from "./TimeSlot.module.css";

export type ITimeSlot = {
  label: string;
  time: string;
};

interface Props extends ITimeSlot {
  selected: boolean;
  onClick: (time: string) => void;
}

export default function TimeSlot({ label, time, selected, onClick }: Props) {
  return (
    <div
      className={clsx(classes.timeslot, selected && classes.selected)}
      aria-hidden="true"
      onClick={() => onClick(time)}
    >
      {label}
    </div>
  );
}
