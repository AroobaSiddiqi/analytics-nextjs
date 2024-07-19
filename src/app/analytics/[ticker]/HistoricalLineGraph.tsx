import Highcharts from "highcharts/highstock";
import { useEffect, useState } from "react";
import { HistoricalData } from "@/apis/analytics/get";
import HighchartsReact from "highcharts-react-official";

interface HistoricalLineGraphProps {
  list: HistoricalData[];
  ticker: string;
}

interface DataPoint {
  x: number;
  y: number;
}

export default function HistoricalLineGraph({
  list,
  ticker,
}: HistoricalLineGraphProps) {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    setData(
      list.map((item) => ({
        x: new Date(item.date).getTime(),
        y: item.close,
      }))
    );
  }, [list]);

  const options = {
    chart: {
      renderTo: "linegraph",
      type: "line",
      backgroundColor: "#111827",
      plotBackgroundColor: "#030712",
      marginBottom: 50,
      marginTop: 40,
      marginLeft: 100,
      marginRight: 50,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      labels: {
        enabled: false, 
        style: {
          color: "#ffffff",
        },
        formatter: function (
          this: Highcharts.AxisLabelsFormatterContextObject
        ) {
          return Highcharts.dateFormat("%b'%y", this.value as number);
        },
        step: 1,
      },
    },
    rangeSelector: {
      enabled: true,
      inputEnabled: false,
      buttonTheme: {
        fill: "#374151",
        stroke: "#374151",
        style: {
          color: "#ffffff",
        },
        borderRadius: 30,
        states: {
          hover: {
            fill: "#374151",
            stroke: "#374151",
            style: {
              color: "#ffffff",
            },
          },
          select: {
            fill: "#374151",
            stroke: "#374151",
            style: {
              color: "#ffffff",
            },
          },
        },
      },
    },
    scrollbar: {
      enabled: false,
    },
    navigator: {
      enabled: false,
    },
    title: {
      text: null,
    },
    yAxis: {
      title: {
        style: {
          color: "#ffffff",
        },
      },
      labels: {
        formatter: function (this: any): string {
          return "$" + this.value;
        },
        align: "right",
        x: -10,
        style: {
          color: "#ffffff",
        },
      },
      gridLineColor: "rgba(55, 65, 81, 0.15)",
    },
    tooltip: {
      split: true,
      backgroundColor: "#374151",
      borderColor: "#374151",
      style: {
        color: "#ffffff",
      },
      xDateFormat: "%Y-%m-%d",
      formatter: function (this: any): string {
        return (
          ticker +
          " Stock Price: " +
          this.y +
          "<br>" +
          Highcharts.dateFormat("%a %b %e %Y", this.x)
        );
      },
    },
    series: [
      {
        type: "line",
        name: ticker,
        data: data,
        color: "#21C7A8",
        lineWidth: 2,
      },
    ],
  };

  return (
    <main className="py-2">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </main>
  );
}
