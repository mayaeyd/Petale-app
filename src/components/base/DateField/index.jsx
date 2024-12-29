import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker({ label, onChange, fieldColor }) {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#ffffff21",
              borderRadius: "15px",
              fontFamily: "Proxima Nova Light",
              "& input": {
                color: fieldColor ? fieldColor : "#fff",
                opacity: 1,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: fieldColor ? fieldColor : "#fff",
                borderWidth: "2px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: fieldColor ? fieldColor : "#fff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: fieldColor ? fieldColor : "#fff",
                borderWidth: "3px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: fieldColor ? fieldColor : "#fff",
              fontFamily: "Proxima Nova Thin",
              "&.Mui-focused": {
                color: fieldColor ? fieldColor : "#fff",
              },
            },
            "& .css-1ro85z9-MuiTypography-root": {
              color: "#fff !important",
              fontFamily: "Proxima Nova Light",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
