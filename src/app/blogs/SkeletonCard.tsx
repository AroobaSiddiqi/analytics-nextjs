import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SkeletonLoader from "../components/skeletonLoader";


export function SkeletonCard() {
  return (
    <Card className="w-full font-roboto">
      <div className="aspect-w-16 aspect-h-9 relative" style={{ paddingBottom: '50%' }}>
        <SkeletonLoader width="w-full" height="h-full" borderRadius="rounded-t-lg" />
      </div>
      <CardHeader>
        <SkeletonLoader width="w-1/2" height="h-4" />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-1">
          <SkeletonLoader width="w-3/4" height="h-6" />
        </CardTitle>
        <CardDescription className="">
          <SkeletonLoader width="w-full" height="h-12" />
        </CardDescription>
      </CardContent>
      <CardFooter>
        <SkeletonLoader width="w-1/4" height="h-4" />
      </CardFooter>
    </Card>
  );
}
