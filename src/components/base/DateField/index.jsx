import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker({ label, onChange }) {
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
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#ffffff21",
              borderRadius: "15px",
              fontFamily: "Proxima Nova Light",
              "& input": {
                color: "#fff",
                opacity: 1,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
                borderWidth: "2px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
                borderWidth: "3px",
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#fff",
              fontFamily: "Proxima Nova Thin",
              "&.Mui-focused": {
                color: "#fff",
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
