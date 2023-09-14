import { HeroSection, Tab } from "@/components"
import OverviewTab from "@/components/Tab/OverviewTab";
import VideosTab from "@/components/Tab/VideosTab";
import { getMeidaVideos, getMediaRelaseDate, getMediaDirector } from "@/services/movie"

export default async function MovieContainer({ movie = {}, params }) {
  const [{ results: video }, { results: release_dates }, {crew: director}] = await Promise.all([
    getMeidaVideos(params.slug, params.id),
    getMediaRelaseDate(params.slug, params.id),
    getMediaDirector(params.slug, params.id)
  ])

  const trailer = video.find(({ type }) => type === "Trailer");
  const usReleaseDate = Object.values(release_dates).find(({ iso_3166_1 }) => iso_3166_1 === "US")
  
  const directorResult = director.find(({ job }) => job === "Director");

  const tabs = [
    {
      label: 'Overview',
      content: <OverviewTab movie={movie} release_date={usReleaseDate.release_dates[0].release_date} director={directorResult} />
    },
    {
      label: 'Videos',
      content: <VideosTab videos={video} />
    },
    {
      label: 'Photos',
      content: <div>Photos</div>
    },
  ]

  return (
    <>
      <HeroSection movie={movie} video={trailer} />

      <Tab tabs={tabs} />
    </>
  )
}
