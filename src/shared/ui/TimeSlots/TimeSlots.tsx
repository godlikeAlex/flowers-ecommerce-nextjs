import TimeSlot, { ITimeSlot } from "./TimeSlot";

interface Props {
  timeSlots: ITimeSlot[];
  onChange: (time: string) => void;
  value?: string;
}

export default function TimeSlots({ timeSlots, onChange, value }: Props) {
  return (
    <div className="d-flex gap-2">
      {timeSlots.map((timeSlot) => (
        <TimeSlot
          key={timeSlot.time}
          onClick={(time) => onChange(time)}
          selected={value === timeSlot.time}
          {...timeSlot}
        />
      ))}
    </div>
  );
}
