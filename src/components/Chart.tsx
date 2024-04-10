"use client"
import React, { useState } from 'react';
import PlotFigure from './PlotFigure';
import * as Plot from "@observablehq/plot";

interface TableData {
  year: number;
  population: number;
}

const Chart: React.FC = () => {
  const initialRowCount = 5;
  const [tableData, setTableData] = useState<TableData[]>(Array.from({ length: initialRowCount }, () => ({ year: 0, population: 0 })));
  const [graphData, setGraphData] = useState<TableData[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, key: keyof TableData) => {
    const newData = [...tableData];
    newData[index][key] = parseInt(e.target.value);
    setTableData(newData);
  };

  const addRow = () => {
    setTableData([...tableData, { year: 0, population: 0 }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGraphData(tableData);
  };

  return (
    <>
      <div>Chart</div>

      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td><input type="number" value={data.year} onChange={(e) => handleInputChange(e, index, 'year')} /></td>
                <td><input type="number" value={data.population} onChange={(e) => handleInputChange(e, index, 'population')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addRow}>Add Row</button>
        <button type="submit">Generate Graph</button>
      </form>

      {graphData.length > 0 && (
        <PlotFigure
          options={{
            x: { tickFormat: "d", interval: 1 },
            marks: [Plot.barX(graphData, { x: "population", y: "year" })]
          }}
        />
      )}
    </>
  );
}

export default Chart;
