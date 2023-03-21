import TimeRow from "./TimeRow";

export default function TimeTable() {
  return (
    <div className="time-table-wrapper">
      <div className="start-end">
        <span></span>
        <label>:00</label>
        <label>:30</label>
      </div>
      <div className="time-table">
        <TimeRow hour="5" />
        <TimeRow hour="6" />
        <TimeRow hour="7" />
        <TimeRow hour="8" />
        <TimeRow hour="9" />
        <TimeRow hour="10" />
        <TimeRow hour="11" />
        <TimeRow hour="12" />
        <TimeRow hour="1" />
        <TimeRow hour="2" />
        <TimeRow hour="3" />
        <TimeRow hour="4" />
        <TimeRow hour="5" />
        <TimeRow hour="6" />
        <TimeRow hour="7" />
        <TimeRow hour="8" />
        <TimeRow hour="9" />
        <TimeRow hour="10" />
        <TimeRow hour="11" />
      </div>
    </div>
  );
}
