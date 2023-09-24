import axios from "axios";

const baseUrl = "https://api.exchangerate.host/latest?base=";

const getRates = async (baseCurrency) => {
  const request = await axios.get(`${baseUrl}${baseCurrency}`);
  return request.data.rates;
};

export default { getRates };
