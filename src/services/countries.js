import axios from "axios";
const baseUrl =
  "https://restcountries.com/v3.1/all?fields=name,flags,cca3,cca2,capital,currencies,region,continents,population,borders";

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

export default { getAll };
