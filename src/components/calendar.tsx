import * as React from "react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { Moment } from "moment";

interface PropsType {
  children: JSX.Element;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

function Calendar({ children, setDate }: PropsType) {
  const setDateValue = (selectedDate: Moment | null) => {
    if (!selectedDate) return;
    setDate(selectedDate.format("Do MMM YYYY"));
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <>
          <div {...bindTrigger(popupState)}>{children}</div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateCalendar onChange={setDateValue} />
            </LocalizationProvider>
          </Popover>
        </>
      )}
    </PopupState>
  );
}

export default Calendar;
