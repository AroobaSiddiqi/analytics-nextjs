"use client";

import HistoricalTable from "./HistoricalTable";
import HisotricalGraph from "./HisotricalGraph";
import { getHistoricalData } from "@/apis/analytics/get";
import { getMarketplaceData } from "@/apis/marketplace/get";
import HistoricalLineGraph from "./HistoricalLineGraph";
import { useQuery } from "@tanstack/react-query";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import isAuth from "@/Auth/isAuth";

type props = {
  params: { ticker: string };
};

function TickerPage({ params: { ticker } }: props) {
  
  const [query, setQuery] = useState("");

  const {
    error: tickerError,
    data: tickerData,
    isLoading: tickerLoading,
  } = useQuery({
    queryKey: [ticker],
    queryFn: async () => await getHistoricalData(ticker),
    staleTime: 3000,
  });

  const {
    error: marketplaceError,
    data: marketplaceData,
    isLoading: marketplaceLoading,
  } = useQuery({
    queryKey: ["marketplace"],
    queryFn: async () => await getMarketplaceData(),
    staleTime: 60000,
  });

  // Inside your TickerPage function
  if (marketplaceLoading) return "Loading...";

  if (marketplaceError) return "Error fetching data.\n Please try again.";

  const tickers = marketplaceData!.map((item) => item.t);

  const filteredTickers =
    query === ""
      ? tickers
      : tickers.filter((ticker) =>
          ticker.toLowerCase().includes(query.toLowerCase())
        );

  if (tickerLoading) return "Loading...";

  if (tickerError) return "Error fetching data.\n Please try again.";

  return (
    <main className="px-16">
      <div className="flex justify-between items-center mb-3">
        <p className="text-4xl font-semibold">
          Historical Data <span className="font-normal italic">{ticker}</span>
        </p>

        {/* <Combobox
          as="div"
          value={query}
          onChange={(newTicker) =>
            (window.location.href = `/analytics/${newTicker}`)
          }
        >
          {({ activeOption }) => (
            <>
              <ComboboxInput
                className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#111827] focus:border-[#111827] sm:text-sm text-white bg-[#030712]"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(ticker: string) => ticker}
              />
              <ComboboxOptions className="max-h-60 overflow-auto rounded-md bg-[#202c47] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm text-white">
                {filteredTickers.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-white">
                    Nothing found.
                  </div>
                ) : (
                  filteredTickers.map((ticker) => (
                    <ComboboxOption
                      key={ticker}
                      className={`relative cursor-default select-none py-2 pl-10 pr-4 ${
                        activeOption === ticker
                          ? "bg-[#111827] text-white"
                          : "text-white" // Use activeOption here
                      }`}
                      value={ticker}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {ticker}
                          </span>
                        </>
                      )}
                    </ComboboxOption>
                  ))
                )}
              </ComboboxOptions>
            </>
          )}
        </Combobox> */}
      </div>

      <HistoricalLineGraph list={tickerData ?? []} ticker={ticker} />
      <HisotricalGraph list={tickerData ?? []} ticker={ticker} />
      <HistoricalTable list={tickerData ?? []} />
    </main>
  );
}

export default isAuth(TickerPage);