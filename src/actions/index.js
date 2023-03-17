const axios = require("axios").default;

export function fetchData(query) {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: query !== "" ? query : "Alyona Alyona" },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };
  const albumsData = axios
    .request(options)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log(e);
    });
  return albumsData;
}

export function fetchAlbumData(id) {
  const options = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };
  const albumData = axios
    .request(options)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log(e);
    });
  return albumData;
}

export const getData = (data, query, setIsLoading, setData, fetchData) => {
  if (data?.length === 0 && query?.length === 0) {
    setIsLoading(true);
    fetchData(query).then((response) => {
      if (!response.data.error) {
        setIsLoading(false);
        setData(response.data.data);
      } else {
        getData(data, query, setIsLoading, setData, fetchData);
      }
    });
  } else {
    fetchData(query).then((response) => {
      if (!response.data.error) {
        setIsLoading(false);
        setData(response.data.data);
      } else {
        getData(data, query, setIsLoading, setData, fetchData);
      }
    });
  }
};

export const getAlbumData = (
  setIsLoading,
  setAlbumData,
  fetchAlbumData,
  albumId
) => {
  setIsLoading(true);
  fetchAlbumData(albumId).then((response) => {
    if (!response.data.error) {
      setIsLoading(false);
      setAlbumData({
        albumInfo: response.data,
        artistInfo: response.data.artist,
        tracks: response.data.tracks.data,
      });
    } else {
      getAlbumData(setIsLoading, setAlbumData, fetchAlbumData, albumId);
    }
  });
};
