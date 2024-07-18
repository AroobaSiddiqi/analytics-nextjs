export type HistoricalData = {
  ticker: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adj_close: number;
  volume: number;
};

export const getHistoricalData = async (
  ticker: string
): Promise<Array<HistoricalData>> => {

  const res = await fetch(
    process.env.NEXT_PUBLIC_LINK + ticker
  );
  const data = await res.json();

  return data;
};
