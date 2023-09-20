import { Poster } from "@/components";
import { ageHandle, formatDate } from "@/hooks/date";


export default function PersonDetail({ person }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_auto] max-w-5xl w-full mx-auto gap-6 mb-20">
      <Poster path={person.profile_path} alt={person.name} />

      <div className="flex flex-col">
        <h2 className="text-4xl text-white font-semibold mb-4">
          {person.name}
        </h2>
        <p className="text-zinc-400 mb-6">{person.biography}</p>

        <div className="flex flex-col gap-2">
          <PersonDetail.Feature label='Known for'>{person.known_for_department}</PersonDetail.Feature>

          <PersonDetail.Feature label='Place of birth'>{person.place_of_birth}</PersonDetail.Feature>

          <PersonDetail.Feature label='Age'>
            <div className="flex gap-3 items-center">
              {ageHandle(person.birthday)}
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800"></span>
              {formatDate(person.birthday)}
            </div>
          </PersonDetail.Feature>

          {person.deathday && (
            <PersonDetail.Feature label='Death Day'>{formatDate(person.deathday)}</PersonDetail.Feature>
          )}
        </div>
      </div>
    </div>
  );
}

PersonDetail.Feature = function ({ label, children }) {
  return (
    <div className="grid grid-cols-[120px_auto] gap-2 items-center">
      <div className="text-zinc-300">{label}</div>
      <div className="text-zinc-400 text-sm">{children}</div>
    </div>
  );
};
