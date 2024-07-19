export interface MarketplaceData {
  t: string;
  cn: string;
  mc: number;
  p: number;
  cp: number;
  ind: string;
  vol: number;
}

export const getMarketplaceData = async (): Promise<Array<MarketplaceData>> => {
  const res = await fetch(process.env.NEXT_PUBLIC_MARTKETPLACE_LINK!);
  const data = await res.json();
console.log(data)
  return data;
};
