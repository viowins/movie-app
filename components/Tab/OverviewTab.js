import React from "react";
import { Poster, Button, Icon } from "@/components";
import styles from "./Tab.module.css";
import useSocialLink from '@/hooks/socialLink'

const arrayToStringHandle = (array) => {
  let result = "";
  array.map((item, key) => {
    if (key < 1) {
      result += item.name;
    } else {
      result += ", " + item.name;
    }
  });
  return result;
};

export default function OverviewTab({ media, children, externalIDs }) {
  const getExternalIcon = (socialID) => {
    return socialID.replace(/_id/g, '') ? socialID.replace(/_id/g, '') : 'link'
  };

  return (
    <div className={styles.overviewTab}>
      <Poster
        path={media.poster_path}
        alt={media.original_title ? media.original_title : media.original_name}
      />
      <div className="flex flex-col">
        <h2 className="text-4xl text-white font-semibold mb-4">Storyline</h2>
        <p className="text-lg text-zinc-400 mb-6">{media.overview}</p>
        <div className="columns-1 sm:columns-2 gap-4">{children}</div>
        <div className="flex items-center flex-wrap gap-2 mt-6">
          {Object.keys(externalIDs).map((item, key) => (
            <React.Fragment key={key}>
              {item != "id" && externalIDs[item] != null && externalIDs[item] != "" && (
                <Button
                  href={`${useSocialLink(item)}${externalIDs[item]}`}
                  variant="contained"
                  color="blueHover"
                  width="square"
                  startIcon={<Icon name={getExternalIcon(item)} />}
                  target="_blank"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

OverviewTab.Movie = function ({ movie = {}, release_date, director = {} }) {
  const movieDetails = [
    {
      label: "Released",
      value: release_date,
    },
    {
      label: "Director",
      value: director,
    },
    {
      label: "Budget",
      value: movie.budget.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }),
    },
    {
      label: "Status",
      value: movie.status,
    },
    {
      label: "Runtime",
      value: `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`,
    },
    {
      label: "Revenue",
      value: movie.revenue.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }),
    },
    {
      label: "Language",
      value: arrayToStringHandle(movie.spoken_languages),
    },
    {
      label: "Cateogries",
      value: movie.genres,
    },
    {
      label: "Productions",
      value: arrayToStringHandle(movie.production_companies),
    },
  ];

  return (
    <>
      {movieDetails.map((detail, k) => (
        <div className={styles.overviewDetails} key={k}>
          <div className={styles.label}>{detail.label}</div>

          <div className={styles.content}>
            {detail.label == "Director" || detail.label == "Cateogries" ? (
              <>
                {detail.label == "Director" && (
                  <Button
                    variant="contained"
                    color="blue"
                    size="sm"
                    rounded
                    href="#"
                  >
                    {detail.value.name}
                  </Button>
                )}
                {detail.label == "Cateogries" && (
                  <div className="flex items-center flex-wrap gap-1">
                    {detail.value.map((item, index) => (
                      <Button
                        variant="contained"
                        color="blue"
                        size="sm"
                        rounded
                        href="#"
                        key={index}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>{detail.value}</>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

OverviewTab.Tv = function ({ tv = {} }) {
  const tvDetails = [
    {
      label: "Released",
      value: tv.first_air_date,
    },
    {
      label: "Director",
      value: tv.created_by[0] ? tv.created_by[0].name : "Unknown",
    },
    {
      label: "Seasons",
      value: tv.seasons[0].season_number,
    },
    {
      label: "Status",
      value: tv.status,
    },
    {
      label: "Language",
      value: arrayToStringHandle(tv.spoken_languages),
    },
    {
      label: "Cateogries",
      value: tv.genres,
    },
    {
      label: "Productions",
      value: arrayToStringHandle(tv.production_companies),
    },
  ];

  return (
    <>
      {tvDetails.map((detail, k) => (
        <div className={styles.overviewDetails} key={k}>
          <div className={styles.label}>{detail.label}</div>
          <div className={styles.content}>
            {detail.label == "Director" || detail.label == "Cateogries" ? (
              <>
                {detail.label == "Director" && (
                  <Button
                    variant="contained"
                    color="blue"
                    size="sm"
                    rounded
                    href="#"
                    className="text-center"
                  >
                    {detail.value}
                  </Button>
                )}
                {detail.label == "Cateogries" && (
                  <div className="flex items-center flex-wrap gap-1">
                    {detail.value.map((item, index) => (
                      <Button
                        variant="contained"
                        color="blue"
                        size="sm"
                        rounded
                        href="#"
                        key={index}
                        className="text-center"
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>{detail.value}</>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
