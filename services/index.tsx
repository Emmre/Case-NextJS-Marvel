import axios from "axios";

const url = "http://gateway.marvel.com/v1/public";

export const getData = (offSet = 0) => {
  const data = axios
    .get(
      `${url}/characters?limit=30&offset=${offSet}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`
    )
    .then((res) => res.data);
  return data;
};

export const getDetails = (characterId: string) => {
  const data = axios
    .get(
      `${url}/characters/${characterId}?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`
    )
    .then((res) => res.data.data);
  return data;
};
