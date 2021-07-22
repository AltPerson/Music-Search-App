const axios = require("axios").default;

export function fetchData(query) {
  console.log(process.env.REACT_APP_API_KEY);
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: query ? query : "ШУММ" },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };
  const albumsData = axios
    .request(options)
    .then((response) => {
      return response.data;
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
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
  return albumData;
}
