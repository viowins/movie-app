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

  return fetchMediaApi(path, langEnQuery);
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
