const { config } = require("@/helpers/config");

const API_URL = config.api.baseUrl;
export const login = (payload) => {
  return fetch(`${API_URL}/auth/login`, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
