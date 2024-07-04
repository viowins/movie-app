import { SkeletonSwiper } from "@/components";

export default function Loading() {
  return(
    <div>
      <SkeletonSwiper />
      <div className="hidden md:block"><SkeletonSwiper /></div>
      <div className="hidden md:block"><SkeletonSwiper /></div>
      <div className="hidden md:block"><SkeletonSwiper /></div>
    </div>
  )
}