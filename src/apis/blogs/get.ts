export interface BlogData {
    id: number;
    date: string;
    slug: string;
    title: {rendered:string};
    content: {rendered:string;protected:boolean;};
    excerpt: {rendered:string; protected:boolean};
    aioseo_head_json: {'twitter:data1': string;};
    fimg_url: string;
  }


export const getBlogData = async (): Promise<Array<BlogData>> => {
    const res = await fetch(process.env.NEXT_PUBLIC_BLOGS_LINK!);
    const data = await res.json();
    return data;
  };