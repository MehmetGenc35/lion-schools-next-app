import {config} from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const createContactMessage= (data) => {
  return fetch(`${API_URL}/contactMessages/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });  
};