import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
} from "@mui/material";
import { useState } from "react";
import Input from "../Input";
import DropDown from "../DropDown";

export default function StickyTable({
  columns,
  rows,
  paginate,
  setFilter,
  onClick,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterText, setFilterText] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter((row) => {
    if (!selectedColumn || !filterText) return true;
    const value = String(row[selectedColumn]).toLowerCase();
    return value.includes(filterText.toLowerCase());
  });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {setFilter && (
        <Box sx={{ display: "flex", gap: 2, mb: 2, pt: "10px" }}>
          <DropDown
            label="Filter By"
            options={[
              { value: "", label: "None" },
              ...columns.map((column) => ({
                value: column.id,
                label: column.label,
              })),
            ]}
            inputColor="#666"
            onChange={(event) => setSelectedColumn(event.target.value)}
            value={selectedColumn}
            height="45px"
            width="30%"
            sx={{ flex: 1 }}
          />
          <Input
            fullWidth
            label="Search"
            variant="outlined"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            disabled={!selectedColumn}
            inputColor="#4b5842"
            height="45px"
            width="280%"
            sx={{ flex: 3 }}
          />
        </Box>
      )}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{
                    backgroundColor: "#4b5842",
                    fontFamily: "Cormorant Semibold",
                    fontSize: "1.1em",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => onClick(row.id)}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          sx={{
                            fontFamily: "Proxima Nova Light",
                            fontSize: "0.9em",
                            textAlign: "center",
                            color: "#383838",
                            cursor: "pointer",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {paginate && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
