const langEnQuery = "language=en-US";

export const fetchMediaApi = async (pathname, query = "") => {
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

export const getTrendings = async (query) => {
  return fetchMediaApi("/trending/all/week", `language=en-US${query}`);
};

export const getTrendingMovies = async (query) => {
  return fetchMediaApi("/trending/movie/week", `language=en-US${query}`);
};

export const getHeroMovie = async (media_type, id) => {
  const path = `/${media_type}/${id}`;

  return fetchMediaApi(path, langEnQuery);
};

export const getMediaDetail = async (params) => {
  const path = `/${params.slug}/${params.id}`;

  const [
    fetch,
    { results: video },
    { crew: director },
    { results: release_dates },
    photos,
    { cast: casts },
    external_ids,
    recommendations,
  ] = await Promise.all([
    fetchMediaApi(path, langEnQuery),
    getMeidaVideos(params.slug, params.id),
    getMediaDirector(params.slug, params.id),
    getMediaRelaseDate(params.slug, params.id),
    getMediaPhotos(params.slug, params.id),
    getMediaDirector(params.slug, params.id),
    getExternalIDs(params.slug, params.id),
    getMediaRecommendations(params.slug, params.id),
  ]);

  const trailer = video.find(({ type }) => type === "Trailer");

  if (params.slug == "movie") {
    const usReleaseDate = Object.values(release_dates).find(
      ({ iso_3166_1 }) => iso_3166_1 === "US"
    );
    const directorResult = director.find(({ job }) => job === "Director");

    const res = {
      fetch,
      video,
      director,
      photos,
      usReleaseDate,
      directorResult,
      trailer,
      casts,
      external_ids,
      recommendations,
    };

    return res;
  } else if (params.slug == "tv") {
    const res = {
      fetch,
      video,
      director,
      photos,
      trailer,
      casts,
      external_ids,
      recommendations,
    };

    return res;
  }
};

export const getMeidaVideos = async (media_type, id) => {
  const path = `/${media_type}/${id}/videos`;

  return fetchMediaApi(path, langEnQuery);
};

export const getMediaPhotos = async (media_type, id) => {
  const path = `/${media_type}/${id}/images`;

  return fetchMediaApi(path);
};

export const getMediaRelaseDate = async (media_type, id) => {
  const path = `/${media_type}/${id}/release_dates`;
  return fetchMediaApi(path, langEnQuery);
};

export const getMediaDirector = async (media_type, id) => {
  const path = `/${media_type}/${id}/credits`;
  return fetchMediaApi(path, langEnQuery);
};

export const getExternalIDs = async (media_type, id) => {
  const path = `/${media_type}/${id}/external_ids`;
  return fetchMediaApi(path);
};

export const getPerson = async (id) => {
  const path = `/person/${id}`;
  return fetchMediaApi(path, langEnQuery);
};

export const getPersonImages = async (id) => {
  const path = `/person/${id}/images`;
  return fetchMediaApi(path);
};

export const getPersonMedias = async (id) => {
  const path = `/person/${id}/combined_credits`;
  return fetchMediaApi(path, langEnQuery);
};

export const getMediaRecommendations = async (media_type, id) => {
  const path = `/${media_type}/${id}/recommendations`;
  return fetchMediaApi(path, `${langEnQuery}&page=1`);
};

export const getMedias = async (media_type) => {
  const path = `/${media_type}/popular`
  return fetchMediaApi(path, `${langEnQuery}&page=1`)
}

export const getMoreMedia = async (media_type, page) => {
  const path = `${media_type}/popular`
  return fetchMediaApi(path, `${langEnQuery}&page=${page}`)
}
