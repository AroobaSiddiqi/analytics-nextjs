import { useEffect,useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { HistoricalData } from "@/apis/analytics/get";

interface HistoricalGraphProps {
  list: HistoricalData[];
  ticker: string;
}

interface OHLCDataPoint {
  date: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface VolumeDataPoint {
  date: number,
  volume: number
}


export default function HisotricalGraph({
  list,
  ticker,
}: HistoricalGraphProps) {
  
  useEffect(() => {
    setOHLC(list.map((item) => ({
      date: new Date(item.date).getTime(),
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
    })));

    setVolume(list.map((item) => ({
      date: new Date(item.date).getTime(), 
      volume: item.volume, 
    })));
  }, [list]); 

  const [OHLC,setOHLC] = useState<OHLCDataPoint[]>([]);
  const [volume, setVolume] = useState<VolumeDataPoint[]>([]);

    const groupingUnits: [string, number[] | null][] = [
      ["week", [1]],
      ["month", [1, 2, 3, 4, 6]],
    ];

    const options = {
      chart: {
        renderTo: "ohlcgraph",
        backgroundColor: "#111827",
        plotBackgroundColor: "#030712",
        marginBottom: 50,
        marginTop: 40,
        marginLeft: 100,
        marginRight: 50,
      },

      rangeSelector: {
        selected: 4,
        buttonTheme: {
          fill: "#374151", 
          stroke: "#374151", 
          style: {
            color: "#ffffff",
          },
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
      legend: {
        enabled: false, 
      },
        title: {
      text: null, 
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
      yAxis: [
        {
          labels: {
            align: "right",
            x: -10,
            style: {
              color: "#ffffff",
            },
          },
          title: {
            text: "OHLC",
            style: {
              color: "#ffffff",
            },
          },
          gridLineColor: "rgba(55, 65, 81, 0.15)",
          height: "60%",
          lineWidth: 2,
          resize: {
            enabled: true,
          },
        },
        
        {
          labels: {
            align: "right",
            x: -10,
            style: {
              color: "#ffffff",
            },
          },
          title: {
            text: "Volume",
            style: {
              color: "#ffffff",
            },
          },
          gridLineColor: "rgba(55, 65, 81, 0.15)",
          top: "65%",
          height: "35%",
          offset: 0,
          lineWidth: 2,
        },
      ],

      tooltip: {
        split: true,
        backgroundColor: "#374151",
        borderColor: "#374151",
        style: {
          color: "#ffffff",
        },
      },
      scrollbar: {
        enabled: false,
      },
      navigator: {
        enabled: false,
      },
      series: [
        {
          type: "candlestick",
          name: ticker,
          data: OHLC.map((point) => [point.date, point.open, point.high, point.low, point.close]),
          color: "#0ab6f0",
          lineColor: "#0ab6f0",
          upLineColor: "#0ab6f0",

          dataGrouping: {
            units: groupingUnits,
          },
        },
        {
          type: "column",
          name: "Volume",
          data: volume.map((point) => [point.date, point.volume]),
          yAxis: 1,
          color: "#21C7A8",
          borderColor: "#21C7A8",
          dataGrouping: {
            units: groupingUnits,
          },
        },
      ]
    }


  return (
    <main className="py-2">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </main>
  );
}
