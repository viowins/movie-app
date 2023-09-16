import { HeroSection, Tab } from "@/components"
import OverviewTab from "@/components/Tab/OverviewTab";
import VideosTab from "@/components/Tab/VideosTab";
import PhotoTab from "@/components/Tab/PhotoTab"

export default async function MovieContainer2({ detail = {}, params }) {

  const { fetch, video, photos, usReleaseDate, directorResult, trailer } = detail

  const tabs = [
    {
      label: 'Overview',
      content: <OverviewTab media={fetch}> { params.slug == 'movie' ? <OverviewTab.Movie movie={fetch} release_date={usReleaseDate.release_dates[0].release_date} director={directorResult} /> : <OverviewTab.Tv tv={fetch} /> }</OverviewTab>
    },
    {
      label: 'Videos',
      content: <VideosTab videos={video} />
    },
    {
      label: 'Photos',
      content: <PhotoTab photos={photos} />
    },
  ]

  return (
    <>
      <HeroSection movie={fetch} video={trailer} />

      <Tab tabs={tabs} />
    </>
  )
}
