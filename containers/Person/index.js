import { PersonDetail, Tab, GridSection } from "@/components";
import PersonImages from "@/components/PersonDetail/PersonImages";
import { getPersonImages, getPersonMedias } from "@/services/movie";

export default async function Person({ person }) {
  const [images, knownFor] = await Promise.all([
    getPersonImages(person.id),
    getPersonMedias(person.id)
  ])

  const tabs = [
    {
      label: 'Known For',
      content: <GridSection medias={knownFor.cast} />
    },
    {
      label: "Photos",
      content: <PersonImages profiles={images.profiles} />,
    },
  ];

  return (
    <>
      <PersonDetail person={person} />
      <Tab tabs={tabs} />
    </>
  );
}