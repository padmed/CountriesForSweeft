import axios from "axios";
import config from "../utils/config";

const API_KEY = config.API_KET_AIRPORTS;
const headers = { headers: { "X-Api-Key": API_KEY } };
const baseUrl = "https://api.api-ninjas.com/v1/airports?country=";

const getAirports = async (countryCode) => {
  try {
    const request = await axios.get(`${baseUrl}${countryCode}`, headers);
    console.log(request.data);
    return request.data;
  } catch (e) {
    console.error("Error: ", e.response.data);
  }
};

export default { getAirports };
