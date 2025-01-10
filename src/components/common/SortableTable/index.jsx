import React, { useState } from "react";
import "./style.css";

const SortableTable = ({ headers, rows, onRowClick, rowActions }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedRows = [...rows].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === "ascending" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                onClick={() => header.sortable && handleSort(header.key)}
                className={header.sortable ? "sortable" : ""}
              >
                {header.label}
                {header.sortable && sortConfig.key === header.key && (
                  <span className="sort-indicator">
                    {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                  </span>
                )}
              </th>
            ))}
            {rowActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr
              key={index}
              onClick={() => onRowClick && onRowClick(row)}
              className={onRowClick ? "clickable" : ""}
            >
              {headers.map((header) => (
                <td key={header.key}>{row[header.key]}</td>
              ))}
              {rowActions && (
                <td className="actions-cell">{rowActions(row)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
