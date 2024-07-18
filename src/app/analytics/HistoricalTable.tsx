"use client";

import Table from "../components/table/table";
import { TableColumnDefs } from "../components/table/types";
import { HistoricalData } from "@/apis/analytics/get";

const columns: TableColumnDefs = [
  { name: "Ticker", field: "ticker", attributes: { className: "font-black" } },
  { name: "Date", field: "date" },
  { name: "Open", field: "open" },
  { name: "High", field: "high" },
  { name: "Low", field: "low" },
  { name: "Close", field: "close" },
  { name: "Adjusted Close", field: "adj_close" },
  {
    name: "Volume",
    field: "volume",
    cellRenderer: (data) =>
      Intl.NumberFormat("en-us", {
        notation: "compact",
        compactDisplay: "short",
      }).format(data),
  },
];

interface HistoricalTableProps{
  list:HistoricalData[]
}

export default function HistoricalTable({list}:HistoricalTableProps) {

  return (
    <main className="py-2">
      <Table columns={columns} data={list} />
    </main>
  );
}
