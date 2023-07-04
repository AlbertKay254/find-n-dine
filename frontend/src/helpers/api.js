import axios from "axios";

// This function makes a call to the backend server
export default async function apiCall(
  method /*POST or GET*/,
  endpoint,
  data,
  token // for authentication reasons
) {
  const api = axios.create({
    baseURL: "http://localhost:4444/",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });

  try {
    if (method === "post") {
      let res = await api.post(endpoint, data);
      return res;
    } else if (method === "get") {
      return await api.get(endpoint);
    }
  } catch (err) {
    return undefined;
  }
}
