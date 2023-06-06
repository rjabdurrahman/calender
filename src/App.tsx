import "./App.css";
import Calendar from "./components/calendar";
import { useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [date1, setDate1] = useState("");

  return (
    <>
      <Calendar setDate={setDate}>
        <div>Departure {date}</div>
      </Calendar>
      <br />
      <br />
      <br />
      <Calendar setDate={setDate1}>
        <div>Return {date1}</div>
      </Calendar>
    </>
  );
}

export default App;
