import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles({
  datePicker: {
    width: "100%",
  },
});

function DatePickerRange() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const minDate = new Date();

  return (
    <>
      <KeyboardDatePicker
        className={classes.datePicker}
        disablePast
        label="Start Date"
        value={startDate}
        onChange={setStartDate}
        minDate={minDate}
        format="MM/dd/yyyy"
      />
      <KeyboardDatePicker
        className={classes.datePicker}
        disablePast
        label="End Date"
        value={endDate}
        onChange={setEndDate}
        minDate={minDate}
        format="MM/dd/yyyy"
      />
    </>
  );
}

export default DatePickerRange;
