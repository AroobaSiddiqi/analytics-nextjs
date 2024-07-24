import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { BlogData } from "@/apis/blogs/get";
import { format } from "date-fns";

type BlogCardProps = {
  data: BlogData;
};

export default function BlogCard({ data }: BlogCardProps) {

  const excerpt = data.excerpt.rendered;
  const regex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/g;
  const href = regex.exec(excerpt)?.[1];

  return (
    <Card className="w-full font-roboto">
      <a href={href}>
        <div className="aspect-w-16 aspect-h-9 relative" style={{ paddingBottom: '56.25%' }}>
          <Image
            src={data.fimg_url}
            alt={data.title.rendered}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardHeader >
          <div>{data.aioseo_head_json["twitter:data1"]}</div>
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-1 line-clamp-2">
            <div dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
          </CardTitle>
          <CardDescription className="line-clamp-3">
          <div dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div>{format(new Date(data.date), "MMMM d, yyyy")}</div>
        </CardFooter>
      </a>
    </Card>
  );
}
