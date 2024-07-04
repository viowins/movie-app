import Skeleton from "./Skeleton";
import cn from "classnames"


export default function SkeletonSwiper({ length = 5 }) {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className={cn("aspect-poster w-full h-full", index == 1 && "hidden md:block", index == 2 && "hidden: md:block", index == 3 && "hidden lg:block", index == 4 && "hidden xl:block" )}>
          <Skeleton width="100%" height="100%" />
        </div>
      ))}
    </div>
  )
}