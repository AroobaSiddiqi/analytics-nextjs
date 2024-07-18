"use client";

import HistoricalTable from "./HistoricalTable";
import HisotricalGraph from "./HisotricalGraph";
import { getHistoricalData, HistoricalData } from "@/apis/analytics/get";
import { useEffect, useState } from "react";
import HistoricalLineGraph from "./HistoricalLineGraph";

const ticker1 = "AAPL";
const ticker2 = "MSFT";

export default function Analytics() {
  const [list, setList] = useState<HistoricalData[]>([]);
  const [ticker, setTicker] = useState("AAPL");

  useEffect(() => {
    getHistoricalData(ticker).then((data) => setList(data));
  }, [ticker]);

  useEffect(() => {
    console.log(list)
  }, [list]);

  const handleClick = (ticker: string) => {
    setTicker(ticker);
  };

  return (
    <main className="px-16">
      <div className="flex justify-between items-center mb-3">
      <p className="text-4xl font-semibold">Historical Data <span className="font-normal italic">{ticker}</span></p>
        <div>
          <button
            onClick={() => handleClick(ticker1)}
            className={`me-3 px-6 py-3 rounded-lg shadow-md ${
              ticker === ticker1
                ? "bg-gray-100 text-gray-900"
                : "bg-gray-900 text-white"
            }`}
          >
            {ticker1}
          </button>
          <button
            onClick={() => handleClick(ticker2)}
            className={`px-6 py-3 rounded-lg shadow-md ${
              ticker === ticker2
                ? "bg-gray-100 text-gray-900"
                : "bg-gray-900 text-white"
            }`}
          >
            {ticker2}
          </button>
        </div>
      </div>
      <HistoricalLineGraph list={list} ticker={ticker}/>
      <HisotricalGraph list={list} ticker={ticker}/>
      <HistoricalTable list={list}/>
    </main>
  );
}
