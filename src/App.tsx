import { useState } from "react";
import * as React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Moment } from "moment";

function App() {
  const [date, setDate] = useState("Select Date");

  const setDateValue = (props: Moment | null) => {
    if (!props) return;
    const dt = props.date() + "/" + (props.month() + 1) + "/" + props.year();
    setDate(dt);
  };

  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <div {...bindTrigger(popupState)}>
              <span> {date}</span>
            </div>
            <Menu
              {...bindMenu(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateCalendar onChange={setDateValue} />
                </LocalizationProvider>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}

export default App;
