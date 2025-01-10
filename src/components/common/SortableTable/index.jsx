import React from "react";

const SortableTable = ({ headers, rows, onRowClick, rowActions }) => {
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
