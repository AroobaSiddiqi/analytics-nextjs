"use client";

import { useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef, ICellRendererParams } from "ag-grid-community";
import { useQuery } from "@tanstack/react-query";
import { getMarketplaceData, MarketplaceData } from "@/apis/marketplace/get";
import Link from "next/link";
import isAuth from "@/Auth/isAuth";

function Marketplace() {
 
  const gridRef = useRef(null);

  const { error, data, isFetching } = useQuery({
    queryKey: ["marketplace"],
    queryFn: async () => await getMarketplaceData(),
    staleTime: 3000,
  });

  const columnDefs: (ColDef<MarketplaceData> | ColGroupDef<MarketplaceData>)[] =
    [
      {
        field: "t" as keyof MarketplaceData,
        width: 100,
        headerName: "Ticker",
        cellRenderer: (params: ICellRendererParams) => (
          <Link className="underline" href={`/analytics/${params.value}`}>{params.value}</Link>
        ),
      },
      {
        field: "cn" as keyof MarketplaceData,
        width: 300,
        headerName: "Company Name",
      },
      {
        field: "mc" as keyof MarketplaceData,
        width: 200,
        headerName: "Market Cap",
        cellRenderer: (params: ICellRendererParams) => {
          return Intl.NumberFormat("en-us", {
            notation: "compact",
            compactDisplay: "short",
          }).format(params.value);
        },
      },
      { field: "p" as keyof MarketplaceData, width: 100, headerName: "Price" },
      {
        field: "cp" as keyof MarketplaceData,
        width: 100,
        headerName: "Change",
        cellRenderer: (params: ICellRendererParams) => (
          params.value >= 0 ? (
            <div className="text-green-500">{params.value}%</div>
          ) : (
            <div className="text-red-500">{params.value}%</div>
          )
        ),
      },
      {
        field: "ind" as keyof MarketplaceData,
        width: 300,
        headerName: "Industry",
      },
      {
        field: "vol" as keyof MarketplaceData,
        width: 200,
        headerName: "Volume",
        cellRenderer: (params: ICellRendererParams) => {
          return Intl.NumberFormat("en-us", {
            notation: "compact",
            compactDisplay: "short",
          }).format(params.value);
        },
      },
    ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    suppressSizeToFit: true,
  };

  if (isFetching) return "Loading...";

  if (error) return "Error fetching data.\n Please try again.";

  return (
    <div className="ag-theme-quartz-dark h-screen">
      <AgGridReact
        ref={gridRef}
        rowData={data}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
      />
    </div>
  );
};


export default isAuth(Marketplace);