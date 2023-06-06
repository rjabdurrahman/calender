import * as React from "react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { Moment } from "moment";
import { InjectedProps } from "material-ui-popup-state";

interface PropsType {
  children: JSX.Element;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  closeOnSelect: boolean;
}

function Calendar({ children, setDate, closeOnSelect = true }: PropsType) {
  const setDateValue = (
    selectedDate: Moment | null,
    popupState: InjectedProps
  ) => {
    if (!selectedDate) return;
    else {
      setDate(selectedDate.format("Do MMM YYYY"));
      if (closeOnSelect) popupState.setOpen(false);
    }
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState: InjectedProps) => (
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
              <DateCalendar
                onChange={(selectedDate: Moment | null) => {
                  setDateValue(selectedDate, popupState);
                }}
              />
            </LocalizationProvider>
          </Popover>
        </>
      )}
    </PopupState>
  );
}

export default Calendar;
