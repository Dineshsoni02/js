// https://open.spotify.com/track/6cRY8cYlEgkvwbR8FRyzld?si=c79eab66d67e4085

//track
const trackFunction = () => {
  const trackUrl = "https://api.spotifydown.com/metadata/track";
  const songDataApi = async (id) => {
    try {
      const response = await fetch(`${trackUrl}/${id}`);
      const data = response.json();
      return data;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  let songUrl =
    "https://open.spotify.com/track/6cRY8cYlEgkvwbR8FRyzld?si=c79eab66d67e4085";

  const getParameters = (urlString) => {
    let paramString = urlString.split("track/")[1];
    paramString = paramString.split("?")[0];
    return paramString;
  };
  const songId = getParameters(songUrl);
  const songData = async (id) => {
    const response = await songDataApi(id);
    console.log(response);
  };
  songData(songId);
};

trackFunction();

//Download
const downUrl = "https://api.spotifydown.com/download";
const songDownload = async (id) => {
  try {
    const response = await fetch(`${downUrl}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
let songUrl =
  "https://open.spotify.com/track/6cRY8cYlEgkvwbR8FRyzld?si=c79eab66d67e4085";

const getParameters = (urlString) => {
  let paramString = urlString.split("track/")[1];
  paramString = paramString.split("?")[0];
  return paramString;
};
const songId = getParameters(songUrl);
const data = await songDownload(songId);
console.log(data.link);
//not this
//////////////////////////////////////////////////////////////////////////////////////////////////////////////