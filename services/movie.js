const langEnQuery = "language=en-US";

const fetchMediaApi = async (pathname, query = "") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const res = await fetch(
    `${process.env.MOVIE_DB_URL}${pathname}?${query}`,
    options
  );

  return res.json();
};

const getTrendings = async () => {
  return fetchMediaApi("/trending/all/day", "language=en-US");
};

const getHeroMovie = async (media_type, id) => {
  const path = `/${media_type}/${id}`;

  return fetchMediaApi(path, langEnQuery);
};

const getMediaDetail = async (params) => {
  const path = `/${params.slug}/${params.id}`;

  const [ fetch, { results: video }, { crew: director }, { results: release_dates }, photos ] = await Promise.all([
    fetchMediaApi(path, langEnQuery),
    getMeidaVideos(params.slug, params.id),
    getMediaDirector(params.slug, params.id),
    getMediaRelaseDate(params.slug, params.id),
    getMediaPhotos(params.slug, params.id),
  ])

  const trailer = video.find(({ type }) => type === "Trailer");

  if (params.slug == 'movie') {
    const usReleaseDate = Object.values(release_dates).find(({ iso_3166_1 }) => iso_3166_1 === "US");
    const directorResult = director.find(({ job }) => job === "Director");

    const res = { fetch, video, director, photos, usReleaseDate, directorResult, trailer }
    
    return res

  } else if (params.slug == 'tv') {
    const res = { fetch, video, director, photos, trailer }

    return res
  }
};

const getMeidaVideos = async (media_type, id) => {
  const path = `/${media_type}/${id}/videos`;

  return fetchMediaApi(path, langEnQuery);
};

const getMediaPhotos = async (media_type, id) => {
  const path = `/${media_type}/${id}/images`;

  return fetchMediaApi(path);
};

const getMediaRelaseDate = async (media_type, id) => {
  const path = `/${media_type}/${id}/release_dates`;
  return fetchMediaApi(path, langEnQuery);
};

const getMediaDirector = async (media_type, id) => {
  const path = `/${media_type}/${id}/credits`;
  return fetchMediaApi(path, langEnQuery);
};

export {
  fetchMediaApi,
  getTrendings,
  getHeroMovie,
  getMediaDetail,
  getMeidaVideos,
  getMediaRelaseDate,
  getMediaDirector,
  getMediaPhotos,
};
