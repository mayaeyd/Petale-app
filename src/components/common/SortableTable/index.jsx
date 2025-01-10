import React from "react";

const SortableTable = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("gardenerName")} className="sortable">
              Gardener Name
              {sortConfig.key === "gardenerName" && (
                <span className="sort-indicator">
                  {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                </span>
              )}
            </th>
            <th onClick={() => handleSort("gardenName")} className="sortable">
              Garden Name
              {sortConfig.key === "gardenName" && (
                <span className="sort-indicator">
                  {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                </span>
              )}
            </th>
            <th onClick={() => handleSort("location")} className="sortable">
              Location
              {sortConfig.key === "location" && (
                <span className="sort-indicator">
                  {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                </span>
              )}
            </th>
            <th onClick={() => handleSort("plants")} className="sortable">
              Growing Plants
              {sortConfig.key === "plants" && (
                <span className="sort-indicator">
                  {sortConfig.direction === "ascending" ? " ↑" : " ↓"}
                </span>
              )}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedGardeners.map((gardener) => (
            <tr key={gardener.gardenerId}>
              <td>{gardener.gardenerName}</td>
              <td>{gardener.gardenName}</td>
              <td>{gardener.location}</td>
              <td>{getGrowingPlantsCount(gardener.plants)}</td>
              <td>
                <PinkButtonRound label="View Details" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
