"use client";

import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";
import { getBlogData } from "@/apis/blogs/get";

export default function Blogs() {
  
  const { error, data, isFetching } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => await getBlogData(),
    staleTime: 3000,
  });

  if (isFetching) return "Loading...";

  if (error) return "Error fetching data.\n Please try again.";

    return (
      <main className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
     {data && data.map((blogData, index) => (
        <BlogCard key={index} data={blogData} />
      ))}
    </main>  
    );
  }