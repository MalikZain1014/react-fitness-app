import axios from "axios";

export const exerciseOptions = {
  method: "GET",

  headers: {
    // "X-RapidAPI-Key": "9db52eac7amsh50bf221be8bbe35p195ed1jsnd4ed5fecfe50",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  const response = await axios.get(url, options);
  const data = await response;
  return data;
};
