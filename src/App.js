import "./styles.scss";
import Brand from "./components/Brand";
import TopPriorities from "./components/TopPriorities";
import BrainDump from "./components/BrainDump";
import TimeTable from "./components/TimeTable";
import DateInput from "./components/DateInput";

export default function App() {
  return (
    <div className="App">
      <div className="left-side">
        <Brand />
        <TopPriorities />
        <BrainDump />
      </div>
      <div className="right-side">
        <DateInput />
        <TimeTable />
      </div>
    </div>
  );
}
