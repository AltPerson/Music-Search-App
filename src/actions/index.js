const API_KEY = "f090d06f30msha26f9cbd9f5c41ep17a673jsnc917077c7ee8";
const API_HOST = "deezerdevs-deezer.p.rapidapi.com";

const axios = require("axios").default;

export function fetchData(query) {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: query ? query : "ШУММ" },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
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
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
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
