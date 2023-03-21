export default function TimeRow(props) {
  return (
    <div className="row">
      <div className="hour">{props.hour}</div>
      <div className="start">
        <input type="text" />
      </div>
      <div className="end">
        <input type="text" />
      </div>
    </div>
  );
}
