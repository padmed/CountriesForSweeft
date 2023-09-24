import axios from "axios";
import config from "../utils/config";

const API_KEY = config.API_KEY_LOCATION;

const getCountryName = async ({ longitude, latitude }) => {
  const request = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`,
  );
  return request.data;
};

export default { getCountryName };
