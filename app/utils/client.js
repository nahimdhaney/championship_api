const axios = require("axios");

const { API_URL, API_TOKEN } = require("../../config");

async function apiRequest(method, endpoint, queryParams = {}) {
  const headers = {
    "X-Auth-Token": API_TOKEN,
  };
  let response;
  try {
    response = await axios.request({
      method: method,
      url: API_URL + endpoint,
      headers: headers,
      params: queryParams,
    });
  } catch (error) {
    console.error(error);
  }

  return response.data;
}

module.exports = {
  apiRequest,
};
